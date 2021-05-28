import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    images: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: "400",
    },
});

export default styles;
