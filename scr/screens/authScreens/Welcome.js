import React,{useState,useRef,useContext} from 'react';
import {View, Text, StyleSheet, Dimensions,TextInput, Image, Alert} from 'react-native'
import {colors, parameters,title} from "../../global/styles"
import {Icon, Button,SocialIcon} from 'react-native-elements'
import '../../../assets/LE PETIT.png'

import { Linking, ToastAndroid } from 'react-native'

const openUrl = async(url) => {
  if(await Linking.canOpenURL(url)) {
    await Linking.openURL(url)
  }
  else {
    ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
  }
}

export default function Welcome({navigation}){
    return(
        <View style ={styles.container}>
            <View style ={{flexDirection:"row", alignItems:"flex-start",marginHorizontal:20, marginTop:10}}>
                <Text style ={title}>@lepetitchocolates</Text>
            </View>
            <Image source={require('../../../assets/LE PETIT.png')}
                style={{ width: '15%', height:'15%', alignSelf:"flex-end"}} />



            <View style ={{flexDirection:"row", alignItems:"flex-start",marginHorizontal:20, marginTop:30}}>
                <Icon
                    name ="favorite"
                    type="material"
                    iconStyle ={{color:colors.grey3}}
                    style={{}}
                />
                <Text style ={{marginLeft:5}}>Confeitaria com Amor</Text>
            </View>

            <View style ={{flexDirection:"row", alignItems:"flex-start",marginHorizontal:20, marginTop:5}}>
                <Icon
                    name ="place"
                    type="material"
                    iconStyle ={{color:colors.grey3}}
                    style={{}}
                />
                <Text style ={{marginLeft:5}}>Porto Alegre e Canoas, RS</Text>
            </View>

            <View style ={{flexDirection:"row", alignItems:"flex-start",marginHorizontal:20, marginTop:5}}>
                <Icon
                    name ="schedule"
                    type="material"
                    iconStyle ={{color:colors.grey3}}
                    style={{}}
                />
                <Text style ={{marginLeft:5}}>Encomendas de segunda a domingo das 8h às 21h</Text>
            </View>
            
            <View style ={{marginHorizontal:20, marginTop:20}}>
                <Button 
                    title ="Encomendas"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress={()=> navigation.navigate("SignInScreen")} 
                />
            </View>

            <View style ={{marginHorizontal:20, marginTop:10}}>
                <Button 
                    title ="Cardápio"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                />
            </View>

            <View style ={{marginHorizontal:20, marginTop:10}}>
                <Button 
                    title ="Fale Conosco"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress={()=> navigation.navigate(openUrl('https://blixaplicativos.wixsite.com/blix'))} 
                />
            </View>


        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#ffffff'
    },
    logo:{
        width: '30%',
        height:'30%',
        resizeMode: 'contain',
    },
    buttonOrder:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonOrder:{
        color:"#ffffff"
    },
});