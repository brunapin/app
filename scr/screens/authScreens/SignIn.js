import React, {useState, useEffect} from 'react'
import {View, Keyboard, TouchableOpacity,Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import Header from '../../components/Header'
import {db} from '../../config/firebase'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, emailVerified, signOut} from "firebase/auth";
import { CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc } from "firebase/firestore";
import {Icon} from 'react-native-elements'

const auth = getAuth();

export default function SignInScreen({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //guardar dados em cache
    const storeUserCache = async (value) => {
        try {
            value.pass = password;        
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('user', jsonValue);
            navigation.dispatch(
                CommonActions.reset({
                    index:0,
                    routes:[{name: 'DrawerNavigator'}],
                }),
        );
        } catch (e) {
          console.log('SignIn: erro em storeUserCache:' + e);
        }
      }

      const loginFirebase = () => {
        if (email !== '' && password !==''){
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          if (user.emailVerified===false) {
              alert('E-mail não verificado. Confira sua caixa de entrada.')
          } else {
            // buscar usuário no Cloud Firestore, referenciando a coleção e o ID do usuário
            const getUser = async () => {
                const docRef = doc(db, "users", userCredential.user.uid);
                const docUser = await getDoc(docRef);
        
                if (docUser.exists()) {
                console.log("Document data:", docUser.data());
                storeUserCache(docUser.data());
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            }
            getUser();
            }
        //   
    })
        .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        console.log(error.code)
          switch(error.code){
            case 'auth/user-not-found':
                alert("Erro:\nUsuário não cadastrado.");
                break;
            case 'auth/wrong-password':
                alert('Erro:\nSenha incorreta');
                break;
            case 'auth/invalid-email':
                alert('Erro:\nE-mail inválido');
                break;
            case 'auth/user-disabled':
                alert('Erro:\nUsuário desabilitado');
                break;
          }
        });
    } else{
        alert('Erro:\nPor favor, digite um e-mail e senha válidos')
    }
    };

    //verificar se está realmente logado
    useEffect(()=>{
        
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log(user.uid)
              // ...
            } else {
                console.log('não logado')
              // ...
            }
          });

    }, []);


    return(
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='always'>
            <View>
                <Icon 
                    type = "material-community"
                    style ={{marginLeft:'2%', alignItems:'flex-start'}}
                    name = 'arrow-left-circle'
                    color = "#5CE1E6"
                    size ={28}                 
                    onPress={()=> navigation.navigate("Welcome")}
                />   
            </View> 
            <View style={styles.divSuperior}>
                <Image 
                style={styles.image} 
                source={require('./../../../assets/Logo.png')}
                accessibilityLabel='logo do app'
                />
                <View style={styles.divInput}>
                    <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    placeholder="E-mail"
                    keyboardType='email-address'
                    returnKeyType='next'
                    onChange={({ target: { value } }) => setEmail(value)}
                    value={email}
                    onEndEditing={()=>this.passTextInput.focus()}
                    />            
                    <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    keyboardType='default'
                    returnKeyType='go'
                    placeholder="Senha"
                    type="text"
                    onChange={({ target: { value } }) => setPassword(value)}
                    value={password}
                    />
                    <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={loginFirebase}
                    >
                    <Text style={styles.textButtonLogin}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={styles.textEsqueceuSenha} onPress={()=> navigation.navigate("ForgotPassword")} >
                    Esqueceu sua senha?
                    </Text>
                </View>
            </View>
            
            
            <View style={styles.divInferior}>
                <View style={styles.divOuHr}>
                <View style={styles.divHr}></View>
                <Text style={styles.textOu}>OU</Text>
                <View style={styles.divHr}></View>
                </View>
                <View style={styles.divCadastrarSe}>
                <Text style={styles.textNormal}>Primeiro acesso?</Text>
                <Text style={styles.textCadastrar} onPress={()=> navigation.navigate('SignUpScreen')} >
                    Comece aqui!
                </Text>
                </View>
            </View>
            <View style={{height:100}}/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10,
        backgroundColor:'white',
    },
    divSuperior:{
        flex:4,
        alignItems: 'center',
        marginTop:10,
    },
    divInput:{
        backgroundColor:'#EEF3F7',
        borderRadius:15,
        width: '80%',
        paddingHorizontal:10,
        alignItems:'center'
    },
    divInferior:{
        flex:1,
        alignItems: 'center',
        marginTop:10
    },
    image:{
        width:160,
        height:160,
        marginBottom:10,
        resizeMode:'contain'
    },
    input: {
        marginTop:10,
        height:40,
        width: '95%',
        backgroundColor:'white',
        borderRadius:20,
        fontSize:16,
        paddingLeft:10
    },
    buttonLogin:{
        width: '40%',
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5CE1E6",
        borderRadius: 20,
        marginTop: 20,
        padding:10,
    },
    textButtonLogin:{
        color:"white",
        fontWeight:'bold',
        fontSize:16
    },
    textEsqueceuSenha:{
        fontSize:14,
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
        color:'black',
        textDecorationLine:'underline',
    },
    divOuHr:{
        width:'100%',
        height:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    divHr:{
    width:'30%',
    height:1,
    borderBottomColor:'#A6A6A6',
    borderBottomWidth:1
    },
    textOu:{
    marginHorizontal:20,
    fontSize:18,
    color:'#A6A6A6'
    },
    divCadastrarSe:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
    },
    textNormal:{
    fontSize:16,
    marginBottom:2
    },
    textCadastrar:{
    fontSize:18,
    color:'#5CE1E6' ,
    marginLeft:5

    }
})