import React, {Component, useState} from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import {colors} from '../global/styles'

export default function MenuCard({Título, Descricao, Preco, Imagem}){
  return(
      <View style ={styles.view1}>
          <View style ={styles.view2}>
              <View style ={styles.view3}>
                  <Text style ={styles.text1}>{Título}</Text>
                  <View>
                      <Text style ={styles.text2}>{Descricao}</Text>
                  </View>
                  <Text style = {styles.text3}>R$ {Preco}</Text>
              </View>
              <View>
                   <Image style ={styles.image} source ={{uri:Imagem[0].url}} />
              </View>
          </View>
      </View>
  )
}

const styles =StyleSheet.create({

    view1:{backgroundColor:"white",
            elevation:4,
            shadowOpacity:0.4,
            shadowColor:"black",
            margin:5,
            padding:10,
            borderRadius:10
},

view2: {flex:1,
        flexDirection:"row",
        padding:0,
        justifyContent:"space-between"
},

view3 :{flex:10,
        justifyContent:"space-between"
        },

text1: {
    fontSize:15,
    color:colors.grey1,
    fontWeight:"bold"
    },

    text2:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2
     },

text3:{
    fontSize:15,
    color:colors.black,
    },

image:{width: 100,
    height: 80,
    resizeMode: 'cover',
    borderRadius:15
    }
})