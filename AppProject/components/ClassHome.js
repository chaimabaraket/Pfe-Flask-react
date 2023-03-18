import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class ClassHome extends Component {
    state = {
        name :"chaima baraket"
    }
  render() {
    return (
      <View>
        <Text style = {{fontSize:20, color:'red'}}>
            hello from class
        </Text>
       <Text style = {{fontSize:20, paddingTop:20}}> {this.state.name}</Text>
       <Button title = "Click me" onPress = { () => this.setState({name:"this is changed"})}/>
      </View>
    )
  }
}

export default ClassHome