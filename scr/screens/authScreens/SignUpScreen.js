import React, { useState } from 'react';
import {db} from '../../config/firebase'
import Header from '../../components/Header'
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc} from "firebase/firestore";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { CommonActions } from '@react-navigation/native'
import { TextInputMask} from 'react-native-masked-text'

const auth = getAuth();

//Sends verification emails in the same language as the language used in the user's device
auth.useDeviceLanguage();

export default function NewUser({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [cellphone, setCellPhone] = useState("");

  const register = () => {
    if (name !== '' && email !== '' && password !== '' && confirmpassword){
      if (password===confirmpassword){
        createUserWithEmailAndPassword(auth, email, password)
        .then((currentUser) => {
          // const user = userCredential.user;
          let user = currentUser.user;
          console.log(user);
          const usersCollectionRef = doc(db, "users", user.uid);
          const createUser = async () => {
                await setDoc(usersCollectionRef, { name: name, email: email });
                console.log('user criado')
              };
          createUser();
          sendVerificationEmail();
        })
        .catch((error) => {          
          console.error(error);
          switch(error.code){
            case 'auth/email-already-in-use':
              alert("Erro:\nEste e-mail já está cadastrado.");
              break;
            case 'auth/weak-password':
              alert('Erro:\nSenha deve conter pelo menos 6 caracteres');
              break;
            case 'auth/invalid-email':
              alert('Erro:\nE-mail inválido');
              break;
            case 'auth/operation-not-allowed':
              alert('Erro:\nproblemas ao cadastrar o usuário.');
              break;
          }   
        });
        }else {
          alert('Erro:\nAs senhas são diferentes');
        }
      }else {
        alert('Atenção!\nPor favor, preencha todos os campos');
        }
    }
  
  //Function called right after the signUpWithEmailAndPassword to send verification emails
  const sendVerificationEmail = () => {
  //Built in firebase function responsible for sending the verification email
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log('Verification Email Sent Successfully !');
      alert('Foi enviado um e-mail para:\n '+ email +' para verificação.');
      navigation.dispatch(
          CommonActions.reset({
              index:0,
              routes:[{name: "SignInScreen"}],
          }),
        );
      }
    )
    .catch(error => {
      console.error(error);
      })
    }

    return(
        <SafeAreaView style={styles.container}>
          <Header title = 'Login' type = 'arrow-left-circle' navigation ={navigation}/>
          <ScrollView keyboardShouldPersistTaps='always'>
            <Text style={styles.title}>Novo Cadastro</Text>
            <View style={styles.divSuperior}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    type="text"
                    returnKeyType='next'
                    onChange={({ target: { value } }) => setName(value)}
                    value={name}
                    onEndEditing={()=>this.passTextInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType='email-address'
                    type="text"
                    returnKeyType='next'
                    onChange={({ target: { value } }) => setEmail(value)}
                    value={email}
                    />
                <TextInputMask
                    style={styles.input}
                    type={'cel-phone'}
                    options={{
                      maskType:'BRL',
                      withDDD:true,
                      dddMask:'(99) '
                    }}
                    placeholder="Celular"
                    returnKeyType='next'
                    onChange={({ target: { value } }) => setCellPhone(value)}
                    value={cellphone}
                    />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Senha"
                    type="text"
                    keyboardType='default'
                    returnKeyType='next'
                    onChange={({ target: { value } }) => setPassword(value)}
                    value={password}
                    />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Confirmar a senha"
                    returnKeyType='go'
                    keyboardType='default'
                    type="text"
                    onChange={({ target: { value } }) => setConfirmPassword(value)}
                    value={confirmpassword}
                    />

                <View style ={styles.view15}>
                  <Text style ={styles.text3}>By creating or logging into an account you are</Text>
                    <View style ={styles.view16}>
                      <Text style ={styles.text3}>agreeing with our  </Text>
                      <Text style ={styles.text4}> Terms & Conditions</Text>
                      <Text style = {styles.text3}> and </Text>
                    </View>
                  <Text style ={styles.text4}> Privacy Statement</Text>
                </View>
       

                <TouchableOpacity
                style={styles.buttonLogin}
                onPress={register}
                >
                <Text style={styles.textButtonLogin}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{height:100}}/>
            </ScrollView>
        </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
        container:{
        flex:1,
        justifyContent:'center',
        padding:20,
        backgroundColor:'white',
        },
        title: {
        fontSize:22,
        color:"#FE9293",
        marginVertical:15,
        fontWeight:"bold",
        alignItems:'center',
        alignSelf:'center'
        },
        divSuperior:{
        flex:5,
        alignItems: 'center',
        marginBottom:20
        },
        divInferior:{
        flex:1,
        alignItems: 'center',
        marginTop:20
        },
        image:{
        width:150,
        height:150,
        marginVertical:10,
        },
        input: {
        width:'90%',
        height:50,
        borderBottomColor:'#D9D9D9',
        borderBottomWidth:2,
        fontSize:16,
        paddingLeft:2,
        paddingBottom:1,
        },
        buttonLogin:{
        width: '40%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FE9293",
        borderRadius: 10,
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
        color:'#FE9293' ,
        marginLeft:5
        },
        view15:{alignItems:'center',
        justifyContent:'center',
        marginTop:10
        },

        text3: {fontSize:13
          },
          
        view16:{flexDirection:'row'},

        text4:{textDecorationLine:'underline',
        color:'green',
        fontSize:13
        }
    })