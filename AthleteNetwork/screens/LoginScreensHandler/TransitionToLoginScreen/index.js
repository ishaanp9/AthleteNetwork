import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import styles from './styles';

const TransitionToLoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        {/* Temp. Name */}
        <Text style={styles.headerText}>AthleteX.</Text> 
        <Image
          style={styles.imageContainer}
          source={require('../../../assets/thxraghav.png')}
        />
      </View>
      {/* We will need somesort of Image here */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Start your Journey Here!</Text>

        <Pressable style={[styles.button, {backgroundColor: 'blueviolet'}]}>
          <Text style={[styles.buttonTitle, {color: 'white'}]}>Sign Up</Text>
        </Pressable>
        <Pressable style={[styles.button, {backgroundColor: 'white', bottom: 20, borderWidth: 1, borderColor: 'blueviolet'}]}>
          <Text style={styles.buttonTitle}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default TransitionToLoginScreen;
