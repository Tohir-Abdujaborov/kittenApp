import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import KittenFetchButtons from "../components/KittenList/KittenFetchButtons";
import KittenCard from "../components/KittenList/KittenCard/KittenCard";
import NetworkUtils from "../components/Internet/NetworkUtils";
import ListLoadSpinner from "../components/LoadingSpinners/ListLoadSpinner";
import axios from "axios";

export default class KittenList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      kittensData: [],
    };
  }
  async componentDidMount() {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (!isConnected) {
      alert("Could'n connect to the internet");
    } else this.fetchKittens();
  }
  fetchKittens(kittenFetchAmount = 30) {
    const url = `https://www.tohir.lt/KittenApp/getKittens.php`;
    this.loadingVisibility(true);
    axios
      .get(url, {
        params: {
          kittensAmountToFetch: kittenFetchAmount,
        },
      })
      .then((Response) => {
        this.setState({ kittensData: Response.data });
        this.loadingVisibility(false);
      })
      .catch((error) => {
        alert("Could't fetch kittens from network: ", error);
        this.loadingVisibility(false);
      });
  }
  loadingVisibility(isVisible) {
    this.setState({ loading: isVisible });
  }
  render() {
    return (
      <View style={style.container}>
        <ListLoadSpinner
          loadingVisible={this.state.loading}
          loadingText="Loading..."
        />
        <KittenFetchButtons
          fetchMin={() => this.fetchKittens()}
          fetchMed={() => this.fetchKittens(50)}
          fetchMax={() => this.fetchKittens(100)}
        />
        <ScrollView>
          <View style={style.kittenCardContainer}>
            {this.state.kittensData.map((item, i) => (
              <KittenCard
                kittenImageUrl={item.kittenImageUrl}
                randomKittenName={item.kittenName}
                navigationChild={this.props.navigation}
                key={i}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  kittenCardContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
