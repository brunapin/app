import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet
 } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { getAuth,sendPasswordResetEmail} from "firebase/auth";

const auth = getAuth();


export default function ForgotPassword({ navigation }){
    const [email, setEmail] = useState("");
    
    const resetPassword = () => {
        if(email!== ""){
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Atenção!\nEnviamos um e-mail de recuperação de senha para o seguinte endereço: ' + email);
            console.log('Password reset email send successfully')
            window.location.assign('../SignInScreen');
    })
        .catch((error) => {
            console.error(error);
            switch(error.code){
                case 'auth/user-not-found':
                    alert('Erro:\nUsuário não cadastrado.');
                    break;
                case 'auth/invalid-email':
                    alert('Erro:\nE-mail inválido');
                    break;
                case 'auth/user-disabled':
                    alert('Erro:\nUsuário desabilitado.');
                    break;
              }
        });
    } else {
        alert('Por favor, digite seu e-mail para recuperar a senha.')

    }
}

    //verificar se está realmente logado
    useEffect(()=>{

    }, []);

    return(
        <KeyboardAvoidingView
        //behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.title}>Redefinir a senha</Text>
            <View>
                <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType='email-address'
                type="email"
                onChange={({ target: { value } }) => setEmail(value)}
                value={email}
                onEndEditing={()=>this.passTextInput.focus()}
                />            
            </View>
            { email === ""
            ?
            <TouchableOpacity
            disabled={true}
            // style={styles.buttonInactive}
            >
                <Text style={styles.textButtonLogin}>Confirmar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
            style={styles.buttonLogin}
            onPress={resetPassword}
            >
                <Text style={styles.textButtonLogin}>Confirmar</Text>
            </TouchableOpacity>
            }
        
            <View style={{height:100}}/>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    backgroundColor:'white',
    },
    title: {
    fontSize:20,
    color:"#FE9293",
    marginBottom:10,
    fontWeight:"bold"
    },
    divSuperior:{
    flex:5,
    alignItems: 'center',
    marginTop:20
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
    textNormal:{
    fontSize:16,
    marginBottom:2
    },
    textCadastrar:{
    fontSize:18,
    color:'#FE9293' ,
    marginLeft:5

    }
})