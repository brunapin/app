import React, {Component, useEffect} from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity, StyleSheet, Button} from 'react-native';
import Header from './../components/Header'
import { colors, parameters } from '../global/styles';
import StepperInput from '../components/StepperInput';
import TextButton from '../components/TextButton';
import { AppContext } from '../contexts/ContextProvider';
import 'react-native-gesture-handler';
import {Icon} from 'react-native-elements'

// export default function FoodDetail({navigation, route}){

export default class FoodDetail extends Component { 

    constructor(props){
        super(props)
        this.state={
            quantity:1,
        }
    }
  
    render = () => {
        
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            {/*Body*/}

                    {/*Food Info*/}
                    {/* <View style={{paddingHorizontal:5, marginTop:10}}> */}
                    <AppContext.Consumer>
                    {( {data} ) => data.map((item, index) => (<View className="App" key={index}>
                            <View style ={styles.header}>
                                <View style ={{marginLeft:'2%', alignContent:'center', justifyContent:'center'}}> 
                                    <Icon 
                                        type = "material-community"
                                        name = 'arrow-left-circle' 
                                        color = {colors.headerText}
                                        size ={28}                 
                                        onPress ={()=>{this.props.navigation.goBack(), data.pop()}}
                                    />              
                                </View>
                                <View style ={{flex: 1, alignItems:'center', alignSelf:'center'}}>
                                    <Text style ={styles.headerText}>Ofertas</Text>
                                </View>
                            </View>

                        <ScrollView>
                        <View style={{marginTop:10, marginBottom:10, paddingHorizontal: 5}}>
                        <View>
                        <Image 
                            source={item.image}
                            resizeMode= 'cover'
                            style={{
                                width: '100%',
                                height: 200,
                                borderRadius:15
                            }}
                            />
                        </View>
                        
                        <View style={{paddingHorizontal:5, marginTop:10}}>
                        <Text style={{fontSize:18, fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{fontSize:14,marginTop:10, color:colors.grey3, textAlign:'justify'}}>{item.detail}</Text>
                        <Text>R$ {item.totalPrice}</Text>
                        </View>
                        {/*Quantity*/}
                        <View style={{textAlign:'center', marginTop:10}}>
                        <Text style={{fontSize:18, fontWeight: 'bold'}}>
                            Quantidade
                        </Text>
                        </View>
                        <View>
                            <StepperInput
                            value={this.state.quantity}
                            onAdd={()=>this.setState({quantity:this.state.quantity + 1})}
                            onMinus={()=>{
                                if (this.state.quantity > 1 ){
                                    this.setState({quantity:this.state.quantity - 1})
                                }
                            }}
                            >
                            </StepperInput> 
                        </View>
                        </View>
                    </ScrollView>

                    {/*Add on Cart*/}
                    <View style ={{marginHorizontal:20, marginTop:10}}>

                        {/* <TextButton
                            buttonStyle={{
                                flexDirection:'row',
                                height:60,
                                borderRadius:15,
                                backgroundColor:'grey',
                                paddingHorizontal:10
                            }}
                            label="Adicionar ao carrinho"
                            // labelPrice= {foodItem?.fields.Valor}
                            labelPrice= {quantity * valor}
                            onPress={console.log('oi')}
                            // onPress={() => navigation.navigate("MyOrdersScreen")}
                            /> */}
                          
                        <TouchableOpacity style={{flexDirection:'row',
                                height:60,
                                borderRadius:15,
                                backgroundColor:'grey',
                                paddingHorizontal:10}} 
                                // onPress={()=>navigation.navigate("MyOrdersScreen", editOrder(quantity), )}
                                onPress={()=> {this.props.navigation.navigate('DrawerNavigator'), this.context.editMyCart(item.name, item.totalPrice, this.state.quantity, 1), this.context.sendSheet('24/11/2021', '20:33', 'tatiDev', item.name, this.state.quantity, item.totalPrice),data.pop()}}
                                >
                        </TouchableOpacity>  
  
                        
                    </View>
                </View>)
                    )}
            </AppContext.Consumer>
        </View>
    )
}}

FoodDetail.contextType = AppContext;

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    },
    headerText:{
        color:colors.headerText,
        fontSize:22,
        fontWeight:"bold",
    },
})