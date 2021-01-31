import * as React from 'react';
import { View , StyleSheet, ScrollView } from 'react-native';
import FetchButtons from '../components/KittenList/FetchButtons';
import KittenCard from '../components/KittenList/KittenCard';
import NetworkUtils from '../components/NetworkUtils'; 
import ListLoadingSpinner from '../components/LoadingSpinners/ListLoadingSpinner'; 
import axios from 'axios'; 

export default class AllKittens extends React.Component{
    constructor(){
    super (); 
    this.state = { 
        loading: false, 
        kittensData: []
    }
    }
    async componentDidMount(){
        const isConnected = await NetworkUtils.isNetworkAvailable();
        if (!isConnected){ 
            alert ("Could'n connect to the internet"); 
        }
        else this.fetchKittens();
    }
    fetchKittens(kittenFetchAmount=30){
        const url = "https://www.tohir.lt/KittenApp/getKittens.php"; 
        this.loadingToggle(true); 
        axios.get(url, { params: {
            kittensAmountToFetch: kittenFetchAmount
        }}).then (Response => {
            this.setState({kittensData: Response.data}); 
            this.loadingToggle(false); 
        }).catch (error =>{
            alert ("Could't fetch kittens from network: " , error);
            this.loadingToggle(false); 
        })
    }
    loadingToggle(isVisible){
        this.setState({loading: isVisible});         
    }
  render (){
    return (
        <View style={style.container}>
            <ListLoadingSpinner loadingVisible={this.state.loading}  loadingText="Loading..."/>
            <FetchButtons fetchMin={() => this.fetchKittens()} 
                          fetchMed={() => this.fetchKittens(50)} 
                          fetchMax={() => this.fetchKittens(100)} 
            />
            <ScrollView>
                <View style={style.kittenCardContainer}>
                {this.state.kittensData.map((item,i) => (
                        <KittenCard 
                            kittenImageUrl={item.kittenImageUrl}
                            randomKittenName={item.kittenName} 
                            navigationChild={this.props.navigation} 
                            key={i}/>
                    ))}
                </View>
            </ScrollView>
        </View>
      );
  }
}; 
const style = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: '#fff'
    }, 
    toggleButtonsContainer: {
        flexDirection:'row',
        justifyContent:'space-between', 
        padding: 15,
    },
    fetchButtons: {
        width: 100,
        backgroundColor: '#607D8B',
        padding:10, 
        borderRadius:5, 
        borderColor:'#475C66',
        borderWidth:1 
    },
    fetchButtonTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize:17,
    },
    kittenCardContainer:{
        paddingLeft:15, 
        paddingRight: 15
    }, 
})
