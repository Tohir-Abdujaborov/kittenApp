import React,{Component} from 'react'
import { StyleSheet,View } from 'react-native';
import { Button } from 'react-native-paper';

export default class FetchButtons extends Component{
    render (){
        return (
            <View style={style.toggleButtonsContainer}>
             <Button mode="contained" style={style.fetchButtons2} 
                    onPress={this.props.fetchMin}>
                30
            </Button>
            <Button mode="contained" style={style.fetchButtons2} 
                    onPress={this.props.fetchMed}>
                50
            </Button>
            <Button mode="contained" style={style.fetchButtons2} 
                    onPress={this.props.fetchMax}>
                100
            </Button>
        </View>
        )
    }
}
const style = StyleSheet.create ({
    toggleButtonsContainer: {
        flexDirection:'row',
        justifyContent:'space-between', 
        padding: 15,
    },
    fetchButtons: {
        width: 100,
        backgroundColor: '#607D8B',
        padding:10, 
        borderRadius:10, 
        borderColor:'#475C66',
        borderWidth:1 
    },
    fetchButtons2: {
        width: 100,
        backgroundColor: '#607D8B',
    },
    fetchButtonTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize:17,
    },
})