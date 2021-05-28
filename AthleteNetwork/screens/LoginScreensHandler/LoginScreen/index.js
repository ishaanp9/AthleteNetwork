import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({navigation}) => {
  const AuthenticationOptions = props => (
    <Pressable style={styles.authButton}>
      <Image style={styles.logos} source={props.asset} />
    </Pressable>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* //need to make a styles above */}
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/daddydk.png')}
        />
      </View>
      {/* Top
        Image */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Login</Text>
        <View>
          <Text style={styles.header}>Email</Text>
          <View style={styles.textInputContainer}>
            <Icon name="mail-outline" color={'blueviolet'} size={25} />
            <TextInput
              style={[styles.textInput, {marginBottom: 10}]}
              placeholder="johndoe@gmail.com"
            />
          </View>
          <Text style={[styles.header]}>Password</Text>
          <View style={styles.textInputContainer}>
            <Icon name="lock-outline" color={'blueviolet'} size={25} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Pick a strong password"
            />
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </Pressable>
        <Text style={{color: 'grey'}}>Or, log in with one of the following options</Text>
        <View style={styles.authRow}>
          <AuthenticationOptions
            asset={require('../../../assets/google.png')}
          />
          <AuthenticationOptions asset={require('../../../assets/insta.png')} />
          <AuthenticationOptions asset={require('../../../assets/apple.png')} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>New to AthleteX?</Text>
          <Pressable>
            <Text style={{color: 'blue', fontWeight: 'bold'}}> Sign Up </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
