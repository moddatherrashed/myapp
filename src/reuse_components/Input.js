import React , {Component} from 'react'
import {TextInput , Text,View , StyleSheet} from 'react-native'


const Input = ({label ,value , placeholder, onChangeText , secureTextEntry}) => {
    const {inputStyle , labelStyle , containerStyle} = styles 
    return (
        <View style = {containerStyle} >
            <Text style = {labelStyle}>{label}</Text>
            
            <TextInput
            secureTextEntry = {secureTextEntry}
            placeholder={placeholder}
            value = {value}
            underlineColorAndroid="#007aff"
            onChangeText = {onChangeText}
            style = {inputStyle}
            />
        </View>
    )
    
}
const styles =  StyleSheet.create(
    {
        inputStyle : {
            color : '#000',
            paddingRight : 5,
            paddingLeft : 5 ,
            fontSize : 14 ,
            lineHeight : 35 ,
            flex : 4
        },
        labelStyle : {
            fontSize : 18 ,
            paddingLeft : 20 ,
            color : '#000',
            flex : 2
        },
        containerStyle : {
            height : 40 ,
            flex : 1 ,
            flexDirection : 'row',
            alignItems : 'center'

        }
    }
)
export {Input}