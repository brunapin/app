import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import FoodDetail from '../screens/FoodDetailScreen';
import Home from '../screens/HomeScreen'
import Route1 from './../screens/MenuTabs'

const Stack = createStackNavigator();

// export default function AppStack(){
//     return(
//     <App.Navigator>
//         <App.Screen 
//             name ="FoodDetail"
//             component ={FoodDetail}
//             options ={{
//                 headerShown: false,
//                 ...TransitionPresets.RevealFromBottomAndroid
//             }}
//             /> 

// </App.Navigator>
// )
// }

export default function FirstScreenNavigator () {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Route1"
                component={Route1}
            />
            <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
            />
            
        </Stack.Navigator>
    )
}

