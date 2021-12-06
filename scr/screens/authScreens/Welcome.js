import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import '../../../assets/Capturar.jpg'

export default function Welcome({navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/Capturar.jpg')} style={styles.image}>
                <View style={styles.divSup}>
                    <Text style={styles.text2}>Come to</Text>
                    <Text style={styles.text3}>life.</Text>
                    <Text style={styles.text2}>Come to yoga.</Text>
                </View>
                <View style={styles.divInf}>
                <View style ={{marginTop:10, alignItems:'center'}}>
                <TouchableOpacity
                    style={styles.styledButton}
                    onPress={()=> navigation.navigate("PreLoad")}>
                    <Text style={styles.text}>Conectar-se</Text>
                </TouchableOpacity>
                </View>

                <View style ={{marginTop:10, alignItems:'center'}}>
                    <TouchableOpacity
                        style={styles.styledButton}>
                    <Text style={styles.text}>Inscrever-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode:"cover"
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  styledButton:{
    backgroundColor: "#EEF3F7",
    borderRadius:20,
    width:'50%',
    alignItems:'center',
    justifyContent:'center'

  },
  text2: {
    color: "white",
    fontSize: 20,
    marginLeft:15,
  },
  text3: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    marginLeft:15,
  },
  divInf:{
      flex:1,   
  },
  divSup:{
    flex:4,
  },
  button:{
      height:10,
      width:10,
      alignItems:'flex-start'
  }
});