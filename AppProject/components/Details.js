import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { Button } from 'react-native-paper'
import axios from 'axios'

function Details(props) {
    
    const data = props.route.params.data;
    const deleData = (data) => {
        axios.delete(`http://192.168.1.5:5002/delete/${data.id}/` 
        )
        .then(resp => {
        props.navigation.navigate('Home')
        })
        .catch(error => {
        console.log(error);
        });
    }

    return (
        <ScrollView>
            <View style={styles.viewStyle}>
                <Text style={{fontSize: 25}}>
                    {props.data.title}
                </Text>
                <Text style={{fontSize: 20, marginTop: 10, marginBottom: 10}}>
                    {props.data.body}
                </Text>
                <Text style={{fontSize: 15}}>
                    {props.data.date}
                </Text>

                <View style={styles.btnStyle}>
                    <Button 
                        //style={{margin:10}}  
                        icon='update'
                        mode='contained'  
                        onPress={() => props.navigation.navigate('Edit', {data: data})}>
                        EDIT
                    </Button>

                    <Button 
                        //style={{margin:10}}  
                        icon='delete'
                        mode='contained'  
                        onPress={() => deleData(data)}>
                        DELETE
                    </Button>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10,
        margin: 10
    },

    btnStyle: {
        padding: 10,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Details