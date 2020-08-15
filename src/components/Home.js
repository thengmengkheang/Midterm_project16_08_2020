import React , {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';


export default class Home extends Component{
    render() {
    return (
        <View style = {styles.container}>
        <Text style = {styles.text}> Homepage</Text>
        </View>
    );
    }
}
const styles  ={
    container : {
        padding : 20,
        flex :1,
        backgroundColor : '#ecf0f1',
        justifyContent : 'center',
        alignItems : 'stretch',
    },
    text : {
        textAlign : 'centet',
        color : 'black',
        fontSize : 20

    }
}

