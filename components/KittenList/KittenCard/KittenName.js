import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class KittenName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.kittenNameContainer}>
        <Text style={style.kittenName}>{this.props.name}</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  kittenName: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  kittenNameContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
});
