import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class KittenImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { imageId, imageLoadEnd } = this.props;
    const imageUrl = `http://placekitten.com/400/300?image=${imageId}`;
    return (
      <Image
        source={{ uri: imageUrl }}
        style={style.image}
        onLoadEnd={imageLoadEnd}
      />
    );
  }
}
const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
