import React from 'react';
import { Text, Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import styles from './styles';

const LoginScreen = ({navigation}) => {
    return(
        <ImageBackground source={require('../../assets/athletesloginimg.png')} style={styles.imgBackground}>
            <SafeAreaView style={styles.firstInputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor='#666'
                />
            </SafeAreaView>
            <SafeAreaView style={styles.secondInputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor='#666'
                    secureTextEntry={true}
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Bike Maps Screen')} style={styles.loginButton}>
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView>
                <TouchableOpacity onPress={() => navigation.navigate('Signup Screen')} style={styles.newAcc}>
                    <Text style={styles.newAccText}>Don't have an account? Create one</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>        
    );
}

export default LoginScreen;