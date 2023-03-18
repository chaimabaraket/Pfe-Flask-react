import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import NavContainer from './components/NavContainer';
import Edit from './components/Edit';
import Details from './components/Details';
import Home from './components/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Create from './components/Create';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// Screen names
const homeName = "Home";
const createName = "Create";


const HomeStack = createStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />  
     <HomeStack.Screen name="Edit" component={Edit} />
   </HomeStack.Navigator>
  );
}

function App() {

  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';

              } else if (rn === createName) {
                iconName = focused ? 'create' : 'list-outline';

              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 }
          }}>

          <Tab.Screen name={homeName} component={HomeStackScreen} />
          <Tab.Screen name={createName} component={Create} />

        </Tab.Navigator>

      </NavigationContainer>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop: Constants.statusBarHeight
  },
});
export default App;