import React,{useState, Component} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,
         ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar, Modal} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {colors,paremeters} from '../global/styles';
import { TabView,TabBar } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { menu } from '../global/Data';
import { Icon} from 'react-native-elements';
import Route1 from './MenuTabs';
import FoodDetail from './FoodDetailScreen';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
// import { useNavigation } from '@react-navigation/core';
import MyAccountScreen from './MyAccountScreen';

const SCREEN_WIDTH = Dimensions.get('window').width

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beef" component={Route1} />
      <Tab.Screen name="Hamburguer" component={Route1} />
    </Tab.Navigator>
  );
}

export default function Home({navigation, route, props}){

    // const [foodOrdered, setFoodOrdered]=React.useState()
    // const [foodQuantity, setFoodQuantity] = React.useState()

    // React.useEffect(() => {
    //     let { orderItems } = route.params;
    //     setFoodOrdered(orderItems)
    //     setFoodQuantity(orderItems)
    // });
    // const {orderItems} = props.route.parms;
    // console.log(orderItems)

      return (
        <View style ={styles.container}>
            <ScrollView>
                <HomeHeader navigation = {navigation}/>     
                <MyTabs></MyTabs>       
          </ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('MyCart')} >
            <View style ={styles.view11}>
                <View style ={styles.view12}>
                    <Text style ={styles.text13}>Ver Carrinho</Text>
                    <View style ={styles.view13}>
                        <Text style ={styles.text13}>0</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
        </View>
      );
    }

// export default function Home({navigation,route}){
    
//     const [routes] = useState(menu)
//     const [index,setIndex] = useState(0)
    
//     const renderTabBar = props =>(
//         <TabBar 
//             {...props}
//             indicatorStyle = {{backgroundColor:colors.grey3}}
//             tabStyle = {styles.tabStyle}
//             scrollEnabled = {true}
//             style ={styles.tab}
//             labelStyle = {styles.tabLabel}
//             contentContainerStyle = {styles.tabContainer}
//         />
//     )

    //route é utilizado para receber informações
    // const renderScene = ({route})=>{

    //     switch(route.key){
    //         case 1: 
    //             return <Route1 name = {navigation}/>
    //             // case 2: 
    //             // return <Route2 name = {navigation} /> 
    //             // case 3: 
    //             // return <Route3 name = {navigation} />  
    //             // case 4: 
    //             // return <Route4 name = {navigation} />
    //             // case 5: 
    //             // return <Route5 name = {navigation} />
    //             // case 6: 
    //             // return <Route6 name = {navigation} />
    //             // case 7: 
    //             // return <Route7 name = {navigation} />
    //             // case 8: 
    //             // return <Route8 name = {navigation} />

    //         default:
    //             return null
    //     }
    // }


    
    // return(

    // <View style ={styles.container}>
    //     <HomeHeader navigation = {navigation}/>
    // <ScrollView>
    //     <View style={styles.view1}>
    //         <TabView
    //             navigationState ={{index, routes}}
    //             renderScene = {renderScene}
    //             onIndexChange = {setIndex}
    //             initialLayout = {SCREEN_WIDTH}
    //             renderTabBar = {renderTabBar}
    //             tabBarPosition = 'top'
    //             navigation = {navigation}
    //             route = {route}
    //         />
    //     </View>


    // </ScrollView>
   
    // <TouchableOpacity onPress={()=>navigation.navigate('FoodDetail')} >
    //         <View style ={styles.view11}>
    //             <View style ={styles.view12}>
    //                 <Text style ={styles.text13}>Ver Carrinho</Text>
    //                 <View style ={styles.view13}>
    //                     <Text style ={styles.text13}>0</Text>
    //                 </View>
    //             </View>
    //         </View>
    // </TouchableOpacity>

    // // </View>
    // )
// }

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:20   
    },

    headerText:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3,
    },

    smallCard :{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardTextSected :{
        fontWeight:"bold",
        color:colors.cardbackground
    },

    smallCardText :{
        fontWeight:"bold",
        color:colors.grey2
    },

    view10:{elevation:10,
        backgroundColor:colors.pagebackground
    },

    tab:{ paddingTop:10,
        backgroundColor:'white',
        justifyContent:"space-between",
        alignItems:"center"
    },
  
    tabContainer:{ alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
  
    tabLabel:{
        color: colors.grey1
    },
    
    tabStyle:{width:SCREEN_WIDTH/5,
        maxHeight:45,
    },

    view11:{backgroundColor:colors.buttons,
        height:50,
        alignContent:"center",
        marginBottom:0,
        justifyContent:"center"
        
    },

    view12:{flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        },

    text12:{padding:10,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground
      },

    view13:{ borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2
    },

    text13:{
        paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground,
      },

    floatButton:{
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
    },
    
    scene: {
        flex: 1,
      },
    
      container:{flex:1,
                 top:0,
                 left:0,
                 right:0
         },
    
    view1:{flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:colors.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25
    },
    
    text1:{fontWeight:"bold",
          marginLeft:40,
          color:colors.black,
          fontSize:18
        },
    
    view2:{marginTop:5,
          paddingBottom:20
        },
    
    tab:{ paddingTop :0,
          backgroundColor:colors.buttons,
          justifyContent:"space-between",
         // alignItems:"center"
          },
    
    tabContainer:{ alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          },
    
    tabLabel:{fontWeight:'bold',
          color: colors.cardbackground
          },
      
    tabStyle:{width:SCREEN_WIDTH/4,
              maxHeight:45,
            },
    scene2: { backgroundColor: '#673ab7' }

})


// import React from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// const Home = ({navigation}) => {
//     return (
//         <View>
//             <Text style={styles.myText}>Hi I am Screen 1</Text>
//             <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("FoodDetail")}>
//                 <Text style={styles.ButtonText}>Click Me!</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({
//     myText:{
//         color:'tomato',
//         textAlign: 'center',
//         fontSize:18
//     },
//     Button:{
//         backgroundColor:'green',
//         paddingHorizontal: 10,
//         paddingVertical: 6,
//         width:'50%',
//     },
//     ButtonText:{
//         textAlign:'center',
//         fontSize:18,
//         color:'#fff'
//     }
// })