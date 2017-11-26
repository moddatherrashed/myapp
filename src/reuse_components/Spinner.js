import React from 'react'
import {View , StyleSheet ,ActivityIndicator} from 'react-native'

const Spinner = (props) => {

    return (
        <View style ={styles.spinnerStyle} >
            <ActivityIndicator size={props.size || 'large'} color='#FFFFFF'/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        spinnerStyle : {
            flex : 1 ,
            justifyContent : 'center',
            alignItems : 'center'
        }
    }
)

export {Spinner}