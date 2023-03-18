import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import axios from 'axios';

function Create(props) {

    const[title, setTitle] = useState("")
    const[body, setBody] = useState("")

    const insertData = () => {
        console.log(title);
        console.log(body);
        axios.post('http://192.168.1.5:5002/add', {
         title: title,
         body: body
        })
        .then(resp => {
        props.navigation.navigate('Home')
        })
        .catch(error => {
        console.log(error);
        });
    };

  return (
    <View>
        <TextInput style = {styles.inputStyle}
        label = "title"
       
        mode="outlined"
        onChangeText={newText => setTitle(newText)}
        defaultValue={title}
        />

        <TextInput style = {{padding:10}}
        label = "Description"
        
        mode="outlined"
        multiline
        numberOfLines={10}
        onChangeText={newText => setBody(newText)}
        defaultValue={body}
        />
        
        <Button 
        style={{margin:10}}  
        icon = 'pencil'
        mode = 'contained'  
        onPress = {() => insertData()}
        > INSERT ARTICLE </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding:10,
        marginTop:30
    }
})

export default Create