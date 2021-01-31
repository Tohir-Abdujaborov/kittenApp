import React from 'react'; 
import { StyleSheet, View,Text, Image, TouchableOpacity} from 'react-native';
import ImageLoadSpinner from '../LoadingSpinners/ImageLoadSpinner'; 

export default class KittenCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imageSpinnerVisibility: true, 
            kittenImageVisibility: false
        }
    }
    goToKittenView(){
        this.props.navigationChild.navigate ('kittenInfo' , {
            kittenImageId: this.getKittenImageId(this.props.kittenImageUrl), 
            kittenName: this.props.randomKittenName
        });   
    }
    getKittenImageId(kittenImageUrl){
        const urlLength = kittenImageUrl.length;
        const equalPos = kittenImageUrl.indexOf("="); 
        return kittenImageUrl.substring(equalPos+1, urlLength); 
    }
    loaderVisibilitySwitcher(){
        const spinner = (<ImageLoadSpinner spinnerHeight={200} />); 
        if (this.state.imageSpinnerVisibility) return spinner; 
        else return; 
    }
    render (){ 
        return (
            <TouchableOpacity style={style.kittenCard} onPress={() => this.goToKittenView()}>
                <Image source={{ uri: this.props.kittenImageUrl }} 
                       style={style.kittenImage}
                       onLoadStart={() => this.setState({kittenImageVisibility: false, imageSpinnerVisibility: true }) }
                       onLoadEnd={() => this.setState({kittenImageVisibility: true, imageSpinnerVisibility: false }) } />
                {this.loaderVisibilitySwitcher()}
                <View style={style.kittenNameContainer}>
                    <Text style={style.kittenName}>
                        {this.props.randomKittenName}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const style = StyleSheet.create ({
    kittenCard: {
        backgroundColor: '#EEEEEE',
        marginBottom:20,
        borderRadius: 15, 
        borderColor: '#EEEEEE',
        borderWidth: 1,
    },
    kittenName: {
        marginTop:20,
        textAlign: 'center',
    }, 
    kittenImage: {
        width: '100%',
        height:200,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    kittenName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    kittenNameContainer: {
        paddingTop: 15, 
        paddingBottom: 15
    }
})