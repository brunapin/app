import React, {Component} from 'react';
import { View, StyleSheet,FlatList,TouchableOpacity,Text} from 'react-native';
// import {menuData,menuDetailedData} from '../global/Data'
import MenuCard from './../components/MenuCard';
import FoodDetail from './FoodDetailScreen';
import { AppContext } from '../contexts/context';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default class Route1 extends Component { 


    constructor(props) {
      super(props);
      this.state = {
        airtable: [],
      };
    }
  
    componentDidMount() {
      this.makeRemoteRequest();
    }
  
    makeRemoteRequest = () => {
      const url = `https://api.airtable.com/v0/appptq4MNSW4L0JHc/Ofertas?api_key=keyONPXkBC1IlgUIG`;
      this.setState();
  
      fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log(res.records);
          this.setState({ 
            airtable: res.records});
        })
        .catch(error => {
          this.setState({ error });
        });
    };

  
    render = () => {

      return (
        <View style ={{flex:1}}>
            <View style ={styles.view2}>
                <FlatList
                data={this.state.airtable}
                keyExtractor ={(item,index)=>index.toString()}
                renderItem={({ item, index }) => (
                <TouchableOpacity 
                  onPress={()=> {this.props.navigation.navigate('FoodDetail'),
                  this.context.editFoodDetail(item.fields.Título, item.fields.Descricao, item.fields.Preco, item.fields.Imagem[0].url, 1)}}
                
                >      
                  <MenuCard {...item.fields}/>
                </TouchableOpacity>
                )}
                showsVerticalScrollIndicator = {false}
                />
          </View>
        </View>
      );
    }
  }

Route1.contextType = AppContext;

export const Route2 = ()=>(<View style = {styles.scene}/>)
export const Route3 = ()=>(<View style = {styles.scene}/>)
export const Route4 = ()=>(<View style = {{...styles.scene,backgroundColor:"green"}}/>)
export const Route5 = ()=>(<View style = {styles.scene}/>)
export const Route6 = ()=>(<View style = {styles.scene}/>)
export const Route7 = ()=>(<View style = {styles.scene}/>)
export const Route8 = ()=>(<View style = {styles.scene}/>)


const styles = StyleSheet.create({
    scene: {
      flex: 1,
      backgroundColor: '#673ab7'
    },
  
  view2:{marginTop:5,
        paddingBottom:20
      },
  
  scene2: { backgroundColor: '#673ab7' }  
  
  });

// import React from 'react'
// import { SafeAreaView, StatusBar, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'


// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];

  
// const Item = ({ title }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );

// const Route1 = ({navigation}) => {
//     const renderItem = ({ item }) => (
//         <Item title={item.title} />
//       );
//     return (
//     //     <View>
//     //     <Text style={styles.myText}>Hi I am Screen 3</Text>
//     //        <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("NestedScreen", {msg: "I came From Screen4"})}>
//     //            <Text style={styles.ButtonText}>Click Me!</Text>
//     //        </TouchableOpacity>
//     //    </View>
//          <SafeAreaView style={styles.container}>
//         <View>
//           <Text>Hi I am Screen 3</Text>
//              <TouchableOpacity onPress={()=>navigation.navigate("FoodDetail", {msg: "I came From Screen4"})}>
//                  <Text>Click Me!</Text>
//              </TouchableOpacity>
//          </View>
//         <TouchableOpacity onPress={() => navigation.navigate("FoodDetail", {msg: "I came From Screen4"})} >
//         <FlatList
//           data={DATA}
//           keyExtractor={item => item.id}
//           renderItem={renderItem} 
//             // <TouchableOpacity
//               //nPress={() => this.props.navigation.navigate("FoodDetail")}
//             // onPress={()=>{
//             //   this.setState({ 
//             //     clickItem: item.fields});navigation.goback("FoodDetail")}}
//             // >
//         />
//         </TouchableOpacity>
//       </SafeAreaView>
//     )
// }

// export default Route1

// // const styles = StyleSheet.create({
// //     myText:{
// //         color:'tomato',
// //         textAlign: 'center',
// //         fontSize:18
// //     },
// //     Button:{
// //         backgroundColor:'grey',
// //         paddingHorizontal: 10,
// //         paddingVertical: 6,
// //         width:'50%'
// //     },
// //     ButtonText:{
// //         textAlign:'center',
// //         fontSize:18,
// //         color:'#fff'
// //     }
// // })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });