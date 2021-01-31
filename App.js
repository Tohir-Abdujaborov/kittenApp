import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KittenList from './views/KittenList';
import KittenInfo from './views/KittenInfo';

const Stack = createStackNavigator();

export default class App extends Component {
  render (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="allKittens" 
                      component={KittenList}
                      options={{
                      title: "Kitten List", 
                      headerStyle: {
                        backgroundColor: '#ABB9BC',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center'
                      }}} />
        <Stack.Screen name="kittenInfo" 
                      component={KittenInfo}  
                      options={{
                        title: "Kitten View", 
                        headerStyle: {
                          backgroundColor: '#ABB9BC',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          alignSelf: 'center'
                        }}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}