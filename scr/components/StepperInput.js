import React from 'react';
import { View, Text } from "react-native"
import { colors } from "../global/styles"
import {Icon} from 'react-native-elements'

const StepperInput = ({
    value=1,
    onAdd,
    onMinus
}) => {
    return(
        <View style={{
            flexDirection:'row',
            marginTop:10,
            alignItems:'center',
            justifyContent:'center',
            height:60,
            width:'100%',
            }}>
            <Icon 
                type = "material-community"
                name = "minus-circle"
                color = {colors.grey5}
                size = {30}
                style ={{marginRight:10}}
                onPress={onMinus}
                
            />
            <View>
                <Text style={{fontWeight:'bold', fontSize:18}}>
                    {value}
                </Text>
            </View>
            <Icon 
                type = "material-community"
                name = "plus-circle"
                color = {colors.grey5}
                size = {30}
                style ={{marginLeft:10}}
                onPress={onAdd}
            />
        </View>
    )
}


export default StepperInput