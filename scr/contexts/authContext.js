import React, {createContext,useReducer} from 'react'
import { SignInReducer } from '../reducers/authReducers'

export const SignInContext = createContext()

//Criar alguma ações e como esses dados podem ser acessados 
 export const SignInContextProvider = (props)=>{

const[signedIn,dispatchSignedIn] = useReducer(SignInReducer,{
    userToken:null,
})

return(
    <SignInContext.Provider value = {{signedIn,dispatchSignedIn}}>
        {props.children}
    </SignInContext.Provider>
)

}