import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ImageLoadSpinner from "../../LoadingSpinners/ImageLoadSpinner";
import KittenName from "./KittenName";
import KittenImage from "./KittenImage";

export default class KittenCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSpinnerVisibility: true,
      kittenImageVisibility: false,
    };
  }
  goToKittenView() {
    this.props.navigationChild.navigate("KittenInfo", {
      kittenImageId: this.getKittenImageId(this.props.kittenImageUrl),
      kittenName: this.props.randomKittenName,
    });
  }
  getKittenImageId(kittenImageUrl) {
    const urlLength = kittenImageUrl.length;
    const equalPos = kittenImageUrl.indexOf("=");
    return kittenImageUrl.substring(equalPos + 1, urlLength);
  }
  loaderVisibilitySwitcher() {
    const spinner = <ImageLoadSpinner spinnerHeight={200} />;
    if (this.state.imageSpinnerVisibility) return spinner;
    else return;
  }
  render() {
    const { kittenImageUrl, randomKittenName } = this.props;
    return (
      <TouchableOpacity
        style={style.kittenCard}
        onPress={() => this.goToKittenView()}
      >
        <KittenImage
          kittenImageUrl={kittenImageUrl}
          imageOnLoadStart={() =>
            this.setState({
              kittenImageVisibility: false,
              imageSpinnerVisibility: true,
            })
          }
          imageOnLoadEnd={() =>
            this.setState({
              kittenImageVisibility: true,
              imageSpinnerVisibility: false,
            })
          }
        />
        {this.loaderVisibilitySwitcher()}
        <KittenName name={randomKittenName} />
      </TouchableOpacity>
    );
  }
}
const style = StyleSheet.create({
  kittenCard: {
    backgroundColor: "#EEEEEE",
    marginBottom: 20,
    borderRadius: 15,
    borderColor: "#EEEEEE",
    borderWidth: 1,
  },
});
