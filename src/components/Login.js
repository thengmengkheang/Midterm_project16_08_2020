import React , {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Registerpage from './Register';
import Homepage from './Home';

export class Login extends Component {
    render() {
        return (
        <View style = {styles.container}>
            <View style = {styles.textfields}
                <TextInput style = {styles.input}>
                placeholder = "username"
                returnKeyType = "next"
                onSubmitEditing = {() => this.passwordInput.focus()}
                keyboardType = "email-address"
                autoCapitalize = "none"
                autoCorrect = {false}
              />
                 <TextInput style = {styles.input}
                                placeholder = "password"
                                returnKeyType = "go"
                                secureTextEntry
                                ref = {(input) => this.passwordInput = input}
                                />
                  <TouchableOpacity style={style.buttoncontainer} onPress= {() => this.props.navigation.navigate(Homepage)}>
                                      <Text style={style.buttontext}>Login</Text>
                                  </TouchableOpacity>
                  <Button

                  title = "Register"
                  color = "green"
                  onPress = {()=> this.props.navigation.navigate('Register')}
                  />
                </View>
                </View>

        );
    }
}

export default class App extends Component {
    render () {
        return (
        <AppStackNavigator />
        );
    }
}
const AppStackNavigator = createStackNavigator ({
    Loginpage : Login,
    Registerpage : Register,
    Homepage : Home
});

const styles = {
    container : {
    padding : 20,
    flex: 1,
    backgroundColor : '#ecf0f1',
    justifyContent : 'center'},
    alignItems : 'stretch'
},

input : {
    paddingLeft : 20,
    borderRadius : 50,
    height : 50,
    fontSize : 25,
    backgroundColor : 'white',
    borderColor : '#labc9c',
    borderWidth: 1,
    marginBottom : 20,
    color : '#34495e'
},

buttoncontainer : {
    height : 50,
    borderRadius : 50,
    backgroundColor : '#labc9c',
    paddingVertical: 10,
    justifyContent : 'center'
},

buttontext : {
    textAlign: 'çenter',
    color: '#ecf0f1'
    fontSize: 20
},
}