import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import {Icon} from 'react-native-elements';
import {colors} from "../global/styles";
import DrawerContent from '../components/DrawerContent';
import Home from '../screens/HomeScreen';

const Drawer = createDrawerNavigator()


export default function DrawerNavigator(){

    return(
        <Drawer.Navigator
                drawerContent  = {props =><DrawerContent {...props} /> }
            >
            <Drawer.Screen 
                name = "RootClientTabs"
                component ={Home}
                options = {{
                    headerShown:false,
                    
                    title:'Client',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material"
                            name = "person"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )

}