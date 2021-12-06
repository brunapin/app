import React, {useEffect, useContext} from 'react'
import { View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { getAuth, setPersistence, signInWithEmailAndPassword, emailVerified, browserSessionPersistence } from "firebase/auth";
import {AuthUserContext} from '../../contexts/ContextProvider'

const auth = getAuth();


const PreLoad = ({navigation}) => {

    const {setUser} = useContext(AuthUserContext);
   
    const getUserCache = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user');
          console.log('getUserCache');
          console.log(jsonValue);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log('PreLoad: erro em getUserCache:' + e);
        }
      };
    
    const loginUser = async (userCredential) => {
        const user = await getUserCache();
        setUser(user);
        console.log('tudo certo');
        console.log(user)
        if(user){
            //código copiado de login(serve para autenticar o usuário) - futuro: refatoração da função
            setPersistence(auth, browserSessionPersistence)
            // signInWithEmailAndPassword( auth, user.email, user.password)
            .then(() => {
                navigation.dispatch(
                    CommonActions.reset({
                        index:0,
                        routes:[{name: 'DrawerNavigator'}],
                    }),
                );
            })
            .catch((error) => {
            console.log('PreLoad: erro em auth:' + error);
            });
        }else {
            navigation.dispatch(
                CommonActions.reset({
                    index:0,
                    routes:[{name: 'SignInScreen'}],
                }),
            );
          }  
    };

    useEffect(() => {
        loginUser();
    }, []);


    return (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#FE9293" />
    </View>
    )
}

export default PreLoad;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });