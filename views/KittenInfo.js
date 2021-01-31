import React, {Component} from 'react';
import {View,Text, Image, StyleSheet, ScrollView} from 'react-native';
import ImageLoadSpinner from '../components/LoadingSpinners/ImageLoadSpinner'; 

export default class AllKittens extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageSpinnerVisibility: true
        }
    }
    loaderVisibilitySwitcher(){
        const spinner = (<ImageLoadSpinner spinnerHeight={300} />); 
        if (this.state.imageSpinnerVisibility) return spinner; 
        else return; 
    }
    render (){
        return (
            <View>
                <Image source={{ uri : `http://placekitten.com/400/300?image=${this.props.route.params.kittenImageId}`}} 
                       style={style.kittenImage}
                       onLoadEnd={() => this.setState({imageSpinnerVisibility: false}) } />
                {this.loaderVisibilitySwitcher()}
                <Text style={style.kittenName}>
                    {this.props.route.params.kittenName}
                </Text>
                <ScrollView>
                    <Text style={style.kittenDescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                        like Aldus PageMaker including versions of Lorem Ipsum
                    </Text>
                </ScrollView>
            </View>
        )
    }
}
const style = StyleSheet.create ({
    kittenImage: {
        width:'100%',
        height:300,
    },
    kittenName: {
        padding:20,
        fontSize: 24,
        fontWeight:'bold'
    },
    kittenDescription: {
        paddingLeft:20, 
        paddingRight: 20,     
    }
})