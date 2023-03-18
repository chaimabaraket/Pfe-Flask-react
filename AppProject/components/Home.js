
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react'
import { Card, FAB } from 'react-native-paper'
import axios from 'axios'

function Home({navigation}) {
    const [data, setData] = useState([]);
  
    const getdata = async () => {
      axios
        .get('http://192.168.1.5:5002/get')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log('Error retrieving data:', error);
        });
    };
  
    const renderData = ({item}) => {
      //console.log('Rendering data:', item);
      return (
        <Card style={styles.cardStyle}>
          <Text
            style={{fontSize: 20, color: 'red'}}
            onPress={() => navigation.navigate('Chaima', {data: item})}>
            {item.title}
          </Text>
        </Card>
      );
    };
  
    useEffect(() => {
      getdata();
    }, []);
  
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
  

const styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
        padding: 10
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0

    }
})
export default Home