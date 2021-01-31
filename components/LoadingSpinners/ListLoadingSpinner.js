import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loading extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <Spinner visible={this.props.loadingVisible}
                     textContent={this.props.loadingText}
                     textStyle={{color: '#fff'}} />
        )
    } 
}
