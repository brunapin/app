// import React from 'react'
// import {View, Text, StyleSheet} from 'react-native'


// export default function MyAccountScreen(){
//     return(
//         <View style ={{flex:1, alignItems:'center',justifyContent:'center'}}>
//             <Text>My Account</Text>
//         </View>
//     )
// }
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MyAccountScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.myText}>Hi I am Screen 3</Text>
            <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("FoodDetail", {msg: "I came From Screen3"})}>
                <Text style={styles.ButtonText}>Click Me!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyAccountScreen

const styles = StyleSheet.create({
    myText:{
        color:'tomato',
        textAlign: 'center',
        fontSize:18
    },
    Button:{
        backgroundColor:'black',
        paddingHorizontal: 10,
        paddingVertical: 6,
        width:'50%'
    },
    ButtonText:{
        textAlign:'center',
        fontSize:18,
        color:'#fff'
    }
})