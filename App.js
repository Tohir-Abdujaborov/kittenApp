import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationOptions } from "./components/Navigation/Options";
import KittenList from "./views/KittenList";
import KittenInfo from "./views/KittenInfo";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="KittenList"
            component={KittenList}  
            options={NavigationOptions("Kitten List")}
          />
          <Stack.Screen
            name="KittenInfo"
            component={KittenInfo}
            options={NavigationOptions("Kitten View")}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
