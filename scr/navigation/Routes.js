import React, {useContext, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {NavigationContainer} from '@react-navigation/native'
import { AuthUserContext } from '../contexts/ContextProvider'
// import AppStack from './AppStack'
import {AuthStack} from './authStack'
import {StatusBar} from 'react-native';

const auth = getAuth();

export default function Routes() {
    //importar o user do AuthUserContext (usando chaves) e obter ele
    const {user, setUser} = useContext(AuthUserContext);

//Para cada página do seu app que precisa de informações sobre o usuário conectado, anexe um observador ao objeto de autenticação global. Este observador é chamado sempre que o estado de login do usuário muda. Anexe o observador usando o método onAuthStateChanged. Quando um usuário faz login corretamente, é possível coletar informações sobre ele no observador.
useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (authUser) => {
        authUser ? setUser(authUser) : setUser(null);
    });
    return unsubscriber;
}, []);

    return (
        <NavigationContainer>
            <StatusBar backgroundColor='#EEF3F7'/>
            {/* {user ? <AppStack /> : <AuthStack/>} */}
            <AuthStack/>
        </NavigationContainer>

    )
}