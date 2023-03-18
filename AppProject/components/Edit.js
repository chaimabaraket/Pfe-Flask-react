import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper'
import axios from 'axios'

function Edit(props) {
    //const data = props.route.params.data;
    const [data, setData] = useState([])

    const[title, setTitle] = useState('data.title')
    const[body, setBody] = useState('data.body')
    
    const updateData = () =>{
        axios.put(`http://192.168.1.5:5002/update/${'data.id'}/`, {
         title: title,
         body: body
        })
        .then(resp => {
        props.navigation.navigate('Home', {data:data})
        })
        .catch(error => {
        console.log(error);
        });

        /*const updateData = () => {
            fetch(`http://192.168.1.5:5002/update/${data.id}/`, {
                method : 'PUT',
                headers : {
                    'Content-type':'application/json'
                }, 
                body: JSON.stringify({title:title, body:body})
            })    
            .then(resp => resp.json())
            .then(data => {
                props.navigation.navigate('Home', {data:data})
            })
            .catch(error => console. log(error))*/
            
        }
    

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
        icon = 'update'
        mode = 'contained'  
        onPress = {() => updateData()}
        > UPDATE ARTICLE </Button>
   </View> 
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding:10,
        marginTop:30
    }
})

export default Edit