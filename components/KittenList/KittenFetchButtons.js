import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default class KittenFetchButtons extends Component {
  render() {
    return (
      <View style={style.buttonsContainer}>
        <Button
          mode="contained"
          style={style.button}
          onPress={this.props.fetchMin}
        >
          30
        </Button>
        <Button
          mode="contained"
          style={style.button}
          onPress={this.props.fetchMed}
        >
          50
        </Button>
        <Button
          mode="contained"
          style={style.button}
          onPress={this.props.fetchMax}
        >
          100
        </Button>
      </View>
    );
  }
}
const style = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    width: 100,
    backgroundColor: "#607D8B",
  },
});
