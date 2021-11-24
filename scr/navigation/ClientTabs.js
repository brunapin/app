import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import { createStackNavigator } from '@react-navigation/stack';
// import {FirstScreenNavigator} from './CustomNavigator';
import Home from '../screens/HomeScreen';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
            tabBarOptions = {{
                activeTintColor :colors.buttons
            }}
            >
            <ClientTabs.Screen 
                name ="HomeScreen"
                component ={Home}
                options ={
                    {headerShown: false, 
                        tabBarLabel : "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />

            <ClientTabs.Screen 
                name ="MyOrders"
                component ={MyOrdersScreen}
                options ={
                    {
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='cart'
                                type = 'material-community'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

        <ClientTabs.Screen 
                name ="MyAccount"
                component ={MyAccountScreen}
                options ={
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

        </ClientTabs.Navigator>
    )
}