import React , {Component} from 'react'
import {Text,View, StyleSheet} from 'react-native'
import {CardSection, Button} from './src/reuse_components/'



const App = () => {

    return (
          <View style={styles.containerStyle} >
            <Text>SauberPro</Text>
            <Button text='Login'/>
          </View>
    )

}

const styles = StyleSheet.create(
  {
    containerStyle : {
        backgroundColor : '#1882C5',
        flex : 1
    }
    textStyle : {
      
    }
  }
)

export default App