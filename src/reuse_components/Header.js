import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


const Header = (props) => {

return (
    <View style = {styles.viewContainer}>
        <Text style = {styles.textStyle}>{props.headerText}</Text>
    </View>
)

}

const styles = StyleSheet.create({
    viewContainer : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 2 ,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    },
    textStyle : {
        fontSize : 20,
        color : '#000',
        
        
    }
})


export  {Header}