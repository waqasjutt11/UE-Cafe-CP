import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import { firebaseConfig } from './../../config';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            this.props.navigation.navigate('Home');
            } else {
            this.props.navigation.navigate('Signup');
            }
        });
    }
    render() {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default LoadingScreen;