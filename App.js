import React from 'react'

import {View, Text, StyleSheet,StatusBar} from 'react-native'
// import  {SignInContextProvider}  from './src/contexts/authContext'
import {colors} from './scr/global/styles'
import RootNavigator from './scr/navigation/RootNavigator'
// import Route1 from './scr/screens/MenuTabs'

import MyOrdersScreen from './scr/screens/MyOrdersScreen'

export default function App(){
  return(
    // <SignInContextProvider>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />  
        <RootNavigator />   
        {/* <FoodDetail/> */}
    </View>
    // </SignInContextProvider> 
  
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})

