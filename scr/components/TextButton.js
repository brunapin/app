import React from "react";
import { TouchableOpacity, Text } from "react-native";

const TextButton = ({
    buttonStyle,
    label,
    labelPrice='',
    labelPriceStyle,
    labelStyle,
    // onPress,
}) => {
    return(
        <TouchableOpacity
            style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor: 'grey',
                ...buttonStyle
            }}
            // onPres={onPress}
            >
            <Text
                style={{
                    color:'white',
                    fontSize:16,
                    ...labelStyle
                }}            
            >
                {label}
            </Text>
            
            {labelPrice != "" &&
            <Text
                style={{
                    flex:1,
                    textAlign:'right',
                    color:'white',
                    fontSize:16,
                    fontWeight:'bold',
                    ...labelPriceStyle
                }}
            >
                {labelPrice}            
            </Text>
            }
        </TouchableOpacity>
    )
}

export default TextButton;