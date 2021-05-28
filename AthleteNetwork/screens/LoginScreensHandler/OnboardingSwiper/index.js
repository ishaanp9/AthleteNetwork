import React from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 12}} {...props} >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingSwiper = ({navigation}) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Login Screen')}
            onDone={() => navigation.navigate('Login Screen')}
            DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.images} source={require('../../../assets/athletesloginimg.png')} />,
                    title: <Text style={styles.title}>Athete Network</Text>,
                    subtitle: <Text style={styles.subtitle} >About Us</Text>,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.images} source={require('../../../assets/athletesloginimg.png')} />,
                    title: <Text style={styles.title}>Athete Network</Text>,
                    subtitle: <Text style={styles.subtitle} >About Us</Text>,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.images} source={require('../../../assets/athletesloginimg.png')} />,
                    title: <Text style={styles.title}>Athete Network</Text>,
                    subtitle: <Text style={styles.subtitle} >About Us</Text>,
                },
            ]}
        /> 
    ); 
};

export default OnboardingSwiper;
