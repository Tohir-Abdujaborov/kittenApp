import React, { Component } from "react";
import { View } from "react-native";
import ImageLoadSpinner from "../components/LoadingSpinners/ImageLoadSpinner";
import KittenImage from "../components/KittenInfo/KittenImage";
import KittenName from "../components/KittenInfo/KittenName";
import KittenDescription from "../components/KittenInfo/KittenDescription";

export default class KittenInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSpinnerVisibility: true,
    };
  }
  loaderVisibilitySwitcher() {
    const spinner = <ImageLoadSpinner spinnerHeight={300} />;
    if (this.state.imageSpinnerVisibility) return spinner;
    else return;
  }
  render() {
    const { kittenImageId, kittenName } = this.props.route.params;
    return (
      <View>
        <KittenImage
          imageId={kittenImageId}
          imageLoadEnd={() => this.setState({ imageSpinnerVisibility: false })}
        />
        <KittenName name={kittenName} />
        {this.loaderVisibilitySwitcher()}
        <KittenDescription />
      </View>
    );
  }
}
