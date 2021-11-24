import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {AuthStack} from './authStack'
import FirstScreenNavigator from './appStack'
import RootClientTabs from './ClientTabs'
import { SignInContext } from '../contexts/authContext';

export default function RootNavigator(){
    return(
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
    )
}

    // const {signedIn} = useContext(SignInContext)
    
    //     return(
    //     <NavigationContainer>
    //         {signedIn.userToken === null  ?  <AuthStack />: <AppStack />}
    //     </NavigationContainer>
    //     )
    // }