import React,{useState, Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,
         ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar, Modal, ImageBackground} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import '../../assets/Capturar2.jpg'

export default function Home({navigation, route, props}){

    return (
        <View style ={styles.container}>
                <HomeHeader navigation = {navigation}/>
                <ScrollView>
                <View style={{flex:6, alignItems:'center'}}>
                    <TouchableOpacity
                    style={styles.buttonHome}>
                        <Text style={styles.textButton}>TEORIA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                        style={styles.backgroundImage}
                        source={require('../../assets/Capturar2.jpg')}
                        >
                            <Text style={styles.textButton}>PRÁTICA</Text>
                        </ImageBackground>
                    </TouchableOpacity>
           
                </View>  
            </ScrollView>
        </View>
      );
    }


const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    buttonHome:{
        width: '40%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5CE1E6",
        borderRadius: 5,
    },
    textButton:{
        color:"white",
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        textAlignVertical:'center'
    },
    backgroundImage: {
        flex: 1,
        height: 160,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
      },
})
