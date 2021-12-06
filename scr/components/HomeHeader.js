import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'
import DrawerNavigator from '../navigation/DrawerNavigator';
import '../../assets/Logo escrito.png'

export default function HomeHeader({navigation}){

//  const BadgeIcon = withBadge(1)(Icon)

    return(
    <View style ={styles.header}>
        <View style = {{flex:1, flexDirection:'row'}}>
            <View style={{alignItems: 'flex-start', justifyContent:'center'}}>
                <Icon 
                    type = "material-community"
                    name = "menu"
                    color = {colors.cardbackground}
                    size = {32}
                    onPress={() => {navigation.toggleDrawer()}}
                />
            </View>

            <View style={{alignItems: 'center', justifyContent:'center', flex:5}}>
                <Image 
                    style={styles.image} 
                    source={require('../../assets/Logo escrito.png')}
                    accessibilityLabel='logo do app'
                />
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({

    header:{
        backgroundColor:'#B5EBFA',
        height:50,
    },
    image:{
        width:100,
        height:40,
        resizeMode:'contain',
    }
})