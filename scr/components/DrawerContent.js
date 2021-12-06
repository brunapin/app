import React, {useState,useContext,useEffect} from 'react';
import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  import {
    Avatar,
    Button,
    Icon
    } from 'react-native-elements'

import {colors} from '../global/styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signOut} from "firebase/auth";
import {AuthUserContext} from '../contexts/ContextProvider'

const auth = getAuth();
     
export default function DrawerContent(props){

    
    const logout = () =>{
        AsyncStorage.removeItem('user')
        .then(() => {
            signOut(auth)
            .then(() => {console.log('deu')})
            .catch(error => {
            console.error(error);
        });
        window.location.assign('../Welcome');
        })
        .catch((e) => {
            console.log('LogoutButton, signOut em removeItem:' + e)
        })
    };

    const {user} = useContext(AuthUserContext);

         return(
             <View style ={styles.container}>
                 <DrawerContentScrollView {...props}>
                <View style = {{flexDirection:'row', alignItems:'center',
                                    paddingLeft:20,paddingVertical:10, backgroundColor:'#5CE1E6'}}>
                    <Icon
                        name='ios-american-football'
                        type='ionicon'
                        color='#517fa4'
                        />   

                    <View style ={{marginLeft:10}}>
                        <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:14 }}>Olá</Text>
                        <Text style ={{color:colors.cardbackground,fontSize:18}}>{user ? user.name : ''}</Text>
                    </View>
            </View>


                
                <DrawerItemList {...props} />

                <DrawerItem 
                    label = "Payment"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "credit-card-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                />


                <DrawerItem 
                    label = "Promotions"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "tag-heart"
                            color ={color}
                            size ={size}
                        />
                    )}
                />



            <DrawerItem 
                    label = "Settings"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                />



        <DrawerItem 
                    label = "Help"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "lifebuoy"
                            color ={color}
                            size ={size}
                        />
                    )}
                />      

     
                </DrawerContentScrollView>  
                <DrawerItem 
                    label = "Sign Out"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "logout-variant"
                            color ={color}
                            size ={size}
                            onPress={logout}
                        />
                    )}
                />   
             </View>
         )
     }
 

     const styles = StyleSheet.create({
        container:{
            flex:1
        },

        preferences:{
            fontSize: 16,
            color:colors.grey2,
             paddingTop:10,
             paddingLeft:20,
        },

        switchText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20,
            paddingVertical:5,
            paddingRight:10
        },
        darkthemeText:{
            fontSize: 16,
            color:colors.grey2,
             paddingTop:10,
             paddingLeft:0,
             fontWeight:"bold"
        }
        
    })