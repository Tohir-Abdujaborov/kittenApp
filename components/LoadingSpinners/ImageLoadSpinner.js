import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class ImageLoadSpinner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = StyleSheet.create({
      spinner: {
        position: "absolute",
        width: "100%",
        height: this.props.spinnerHeight,
      },
    });
    return (
      <Image
        source={require("../../assets/Loader.gif")}
        style={style.spinner}
      />
    );
  }
}
