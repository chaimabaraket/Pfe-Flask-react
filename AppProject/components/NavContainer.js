import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import Details from './Details';

// Screen names
const homeName = "Home";
const createName = "Create";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Chaima" component={Details} />
      <Stack.Screen name="Edit" component={Edit} />
    </Drawer.Navigator>
  );
}

function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Create" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
