import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class KittenImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { kittenImageUrl, imageOnLoadStart, imageOnLoadEnd } = this.props;
    return (
      <Image
        source={{ uri: kittenImageUrl }}
        style={style.image}
        onLoadStart={imageOnLoadStart}
        onLoadEnd={imageOnLoadEnd}
      />
    );
  }
}
const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
