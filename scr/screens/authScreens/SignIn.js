import React,{useState,useRef,useContext} from 'react';
import {View, Text, StyleSheet, Dimensions,TextInput, Alert} from 'react-native'
import {colors, parameters,title} from "../../global/styles"
import Header from '../../components/Header'
import {Icon, Button,SocialIcon} from 'react-native-elements'
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth'
// import DrawerNavigator from './../../navigation/DrawerNavigator'
import firebase from "../../config/firebase"
// import { SignInContext } from '../../contexts/authContext';

export default function SignInScreen({navigation}){

    // const {dispatchSignedIn} = useContext(SignInContext)
    
    const[textInput2Fossued, setTextInput2Fossued] =useState(false)
    const email = useRef(1)
    const password = useRef(2)

async function signIn(data){
    try{
    const {password,email} = data
    const user = await auth().signInWithEmailAndPassword(email,password)
    if(user){
        //depois que o usuário estiver logado, iremos enviar as informações para o armazenamento
        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
        console.log("User logado")
    }
}
    catch(error){
        Alert.alert(
            error.name,
            error.message
        )
    }
}


    return(
        <View 
        style ={styles.container}
        >
            <Header title = 'Minha Conta' type = 'arrow-left' navigation ={navigation}/>
            
            <View style ={{marginLeft:20, marginTop:10}}>
                <Text style ={title}>Login</Text>
            </View>

            <Formik
                initialValues = {{email:'',password:''}}
                onSubmit = {(values)=>{
                    // console.log(values)
                    //A função signIn pega os valores do formulário e envia para a firebase para autenticar os dados que foram passados
                           signIn(values)
   
                }}
            >
                { (props)=>( //a partir daqui reterá todos os itens do login
                    
            <View>
            <View style ={{marginTop:20}}>
                <View>
                    <TextInput
                    style ={styles.TextInput1}
                    placeholder = "E-mail"
                    keyboardType ="email-adress"
                    ref ={email}
                    onChangeText = {props.handleChange('email')}
                    value ={props.values.email}

                    />
                </View>

                <View style ={{marginTop:10}}>
                    <TextInput
                    style ={styles.TextInput1}
                    secureTextEntry={true}
                    placeholder ="Senha"
                    ref ={password}
                    onFocus ={()=>{
                        setTextInput2Fossued(false)
                    }}

                    onBlur ={()=>{
                        setTextInput2Fossued(true)
                    }}
                    onChangeText = {props.handleChange('password')}
                    value = {props.values.password}
                  />
                </View>
                
            </View>
            
            
            <View style ={{marginHorizontal:20, marginTop:30}}>
                <Button 
                    title ="SIGN IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                        // onPress ={props.handleSubmit}
                    onPress ={()=>{navigation.navigate('DrawerNavigator')}}
                />
            </View>
            </View>
                )}
        </Formik>

            <View style ={{alignItems:"center",marginTop:15}}>
                <Text style ={{...styles.text1, textDecorationLine:"underline"}}> Esqueci minha senha. </Text>
            </View>

            <View style ={{alignItems:"center",marginTop:20, marginBottom:20}}>
                <Text style ={{...styles.text1,}}>Não possui cadastro?</Text>
            </View>

            <View style ={{alignItems:"center",marginHorizontal:20}}>
                <Button 
                    title ="Cadastre-se"
                    buttonStyle ={styles.createButton}
                    titleStyle ={styles.createButtonTitle}
                    onPress ={()=>{navigation.navigate('SignUpScreen')}}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        height:40,
        marginBottom:20,
        paddingLeft:15
      },
      TextInput2:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:20,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-between",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:15
      },
      SocialIcon :{
        borderRadius :12,
        height:50
      },
      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
      },
      createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }
})