import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

export default class KittenName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text style={style.kittenName}>{this.props.name}</Text>;
  }
}
const style = StyleSheet.create({
  kittenName: {
    padding: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});
