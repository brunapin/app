import 'react-native-gesture-handler';
import React , {Component} from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {AppContext} from '../contexts/ContextProvider'

import Welcome from "../screens/authScreens/Welcome";
import SignInScreen from "../screens/authScreens/SignIn";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import PreLoad from '../screens/authScreens/PreLoad'
import ForgotPassword from '../screens/authScreens/ForgotPassword'
import DrawerNavigator from "./DrawerNavigator";
import FoodDetail from "../screens/FoodDetailScreen";
import MyCart from "../screens/MyOrdersScreen";

import axios from 'axios'

const Auth = createStackNavigator();

// export default function AuthStack(){
export class AuthStack extends React.Component {
   
      constructor(props) {
        super(props);
        this.state = {
          orderItems: [],
          data:[],
          sheet:[],
        };
      }

    
      editFoodDetail = (name, detail, price, image, quantity) => {
        const { data } = this.state;
        const newItem = {
            name: name,
            qty: quantity,
            totalPrice: price,
            detail: detail,
            image: image,
        }
        data.push(newItem)
        this.setState({
            data,
        });
    }

    editMyCart = (name, price, quantity, valorItem) => {
        const { orderItems} = this.state;
        const newItem = {
            name: name,
            qty: quantity,
            totalPrice: price,
            valorItem: valorItem,
        }
        orderItems.push(newItem)
        this.setState({
            orderItems,
        });
    }

    sendSheet = (date, hour, clientName, productName, productQty, productPrice) => {
        const {sheet} = this.state;
        const newItem = {
            date: date,
            hour: hour,
            clientName: clientName,
            productName: productName,
            productQty: productQty,
            productPrice: productPrice,
        }
        sheet.push(newItem)
        this.setState({
            sheet,
        });
    }

    render() {
    return(
        <AppContext.Provider
        value={
          {
            data: this.state.data,
            orderItems: this.state.orderItems,
            editFoodDetail: this.editFoodDetail,
            editMyCart: this.editMyCart,
            sendSheet: this.sendSheet,
            sheet:this.state.sheet,
            // submitHandler: this.submitHandler
          }
        }>   
        <Auth.Navigator initialRouteName="Welcome">
            <Auth.Screen
            name = "Welcome"
            component = {Welcome}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
            <Auth.Screen
            name = "PreLoad"
            component = {PreLoad}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
            <Auth.Screen
            name = "SignInScreen"
            component = {SignInScreen}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />

            <Auth.Screen
            name = "SignUpScreen"
            component = {SignUpScreen}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />

            <Auth.Screen
            name = "ForgotPassword"
            component = {ForgotPassword}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
            <Auth.Screen
            name = "DrawerNavigator"
            component = {DrawerNavigator}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
            <Auth.Screen
            name = "FoodDetail"
            component = {FoodDetail}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
            <Auth.Screen
            name = "MyCart"
            component = {MyCart}
            options = {{
                headerShown: false, 
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />



        </Auth.Navigator>
    </AppContext.Provider>
    )
}}