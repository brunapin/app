import React, {useState, Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { Button, Form, Container } from 'semantic-ui-react'
import Header from '../components/Header'
import StepperInput from '../components/StepperInput'
import { SwipeListView } from 'react-native-swipe-list-view'
import { colors } from '../global/styles'
import {Icon} from 'react-native-elements'
import { AppContext } from '../contexts/ContextProvider'
import FoodDetail from './FoodDetailScreen'
import axios from 'axios'

// export default function MyCart({navigation, route}){
export default class MyCart extends Component {

    constructor(props) {
        super(props)
      
        this.state ={
        sheet: [{
           name: 'Bruna',
           totalPrice: 50,
           qty: 2,
           valorItem: 2,
        }],
    
    
      }}
    
      submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
    
        axios.post('https://sheet.best/api/sheets/922fa014-73c7-430e-992a-d557d6fe5713', this.context.sheet)
        .then(response => {
          console.log(response);
        })
      }

    render() {
        const subTotal = 0;
        // const array = [];

    return(
        <View style ={{flex:1, backgroundColor:colors.grey5}}>
             <Header title = 'Meu carrinho' type = 'arrow-left-circle' navigation ={this.props.navigation}/>
             <View style={{backgroundColor:'white',borderRadius:15, paddingHorizontal:10, marginHorizontal: 5,marginTop:10}}>
             <Text style={{fontSize:20, fontWeight:'bold', borderBottomWidth:1}}>Itens</Text>
            <AppContext.Consumer>
              {( {orderItems} ) => orderItems.map((item, index) => (<View className="App" key={index}>
              {/* {this.setState({sheet: orderItems})} */}
              <View style={{flexDirection:'row', marginVertical:10, alignItems:'center'}}>

                  <Text style={{width:'5%'}}>{(orderItems.reduce((a,v) =>  a = a + v.valorItem, 0 ))}</Text>
                  <Text style={{width:'77%'}}>{item.name}</Text>
                  <Text style={{width:'18%'}}>R${(item.totalPrice*item.qty).toFixed(2)}</Text>
                  <Icon
                        name ="delete"
                        type="material-community"
                        iconStyle ={{color:colors.grey3}}
                        onPress={()=>{console.log(item), this.setState(orderItems.splice(index, 1)), this.setState(({sheet})=> sheet.splice(index,1))}}
                    />
                </View>
{/* 
                    <Button color="blue" onPress={()=>{}}>Submit</Button> */}


                
                
                </View>)
                
              )}
            </AppContext.Consumer>
            

                    <TouchableOpacity onPress={()=>navigation.navigate('DrawerNavigator')}>
                        <Text style={{textAlign:'center', color:'red', marginVertical:10}}>Adicionar mais itens</Text>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection:"row", marginTop:5}}>
                        <Text style={{width:'82%'}}>Subtotal</Text>
                        <Text style={{width:'18%'}}>R$ {subTotal}</Text>
                        
                    </View>
                   
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Text style={{width:'82%'}}>Taxa de Entrega</Text>
                        <Text style={{width:'18%'}}>R$ 5,90</Text>
                    </View>
                    <View style={{flexDirection:'row', marginVertical:5}}>
                        <Text style={{width:'82%', fontWeight:'bold'}}>TOTAL</Text>
                        <Text style={{width:'18%', fontWeight:'bold'}}>R$ 125,90</Text>
                    </View>
                </View>

                {/*Endereço*/}
                <View style={{backgroundColor:'white',borderRadius:15, paddingHorizontal:10, marginHorizontal: 5,marginTop:10}}>
                    <Text style={{fontSize:18}}>Endereço</Text>
                </View>

                {/*Pagamento*/}
                <View style={{backgroundColor:'white',borderRadius:15, paddingHorizontal:10, marginHorizontal: 5,marginTop:10}}>
                    <Text style={{fontSize:18}}>Pagamento</Text>
                    <View style={{flexDirection:'row', marginVertical:5, alignItems:'center'}}>
                        <Text style={{width:'90%'}}>Selecionar</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('')}>
                        <Text style={{textAlign:'center', color:'red', marginVertical:10}}>Incluir</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                {/*Observações*/}
                <View style={{backgroundColor:'white',borderRadius:15, paddingHorizontal:10, marginHorizontal: 5,marginTop:10}}>
                    <Text style={{fontSize:18}}>Observações</Text>
                    {/* <View style={{flexDirection:'row', marginVertical:5, alignItems:'center'}}>
                        <TextInput
                            style={{width:'90%'}}
                            placeholder = "Escreva aqui as observações do pedido"
                            type="text"
                            onChangeText={(text) => setObs(text)}
                            value ={obs}
                        />
                        {obs !== "" 
                        ?
                        <TouchableOpacity onPress={()=>navigation.navigate('')}>
                            <Text style={{textAlign:'center', color:'red', marginVertical:10}}>Editar</Text>
                        </TouchableOpacity>
                        :
                        <View></View>
                        }
                    </View> */}

                </View>
                <Form className="form" onSubmit={this.submitHandler}>
                    <Button color="blue" type='submit'>Submit</Button>
                </Form>

        </View>
    )
}
}

MyCart.contextType = AppContext;

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: 10,
        paddingHorizontal:10,
        borderRadius:15
    }
})