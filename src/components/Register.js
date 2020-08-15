import React , {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class Register extends Component {
    render() {
    return (
    <View style = {styles.container}>
    <View style = {styles.registerform}>
         <TextInput style = {styles.input}
                                        placeholder = "Enter your name"
                                        returnKeyType = "next"
                                        onSubmitEditing = {() => this.emailinput.focus()}

                                        />

       <TextInput style = {styles.input}
                    placeholder = "enter your email"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    ref = {(input) => this.emailinput = input}
                />
                     <TextInput style = {styles.input}
                                    placeholder = "Enter a password"
                                    returnKeyType = "go"
                                    secureTextEntry
                                    ref = {(input) => this.passwordInput = input}
                                    />
                                    <TouchableOpacity style= {style.buttoncotainer} onPress ={() => this.props.navigation.navigate('LoginPage')}>
                                                            <Text style={style.buttontext}> Sign Up</Text>
                                                        </TouchableOpacity>
    </View>
    </View>
    );
    }

}