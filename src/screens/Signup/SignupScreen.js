import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import image from '../../../assets/splash.png'
import 'firebase/firestore';
import firebase from 'firebase';
import * as Facebook from 'expo-facebook'
import * as GoogleSignIn from 'expo-google-sign-in';
Facebook.initializeAsync('749884709129361', 'UE Cafe');
class SignupScreen extends React.Component {
  state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };
  onLoginSuccess() {
    this.props.navigation.navigate('Home');
  }
  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false });
  }
  renderLoading() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }
  async signInWithFacebook() {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync('749884709129361', {
        permissions: ['email', 'public_profile', 'user_friends']
      });
      if (type === 'success')
       {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase.auth().signInWithCredential(credential);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  async signInWithGoogle() {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken,);
        const googleProfileData = await firebase.auth().signInWithCredential(credential);
        this.onLoginSuccess.bind

      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Image style={styles.image}
                       source={ image }
                       PlaceholderContent={<ActivityIndicator size='large' />}
         />
            
            {this.renderLoading()}
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'red',
                width: '80%'
              }}
            >
              {this.state.error}
            </Text>
            <View style={styles.fbbutton}>
                <FontAwesome.Button 
                name="facebook"
                backgroundColor="#3b5998"
                size={24}
                borderRadius={20}
                style={styles.fbicon}
                onPress={this.signInWithFacebook}
                >
                     Signup with facebook        
                </FontAwesome.Button>
                </View>
                <View style={styles.gmailbutton} >
                    <MaterialCommunityIcons.Button
                     name="gmail" 
                     size={24} 
                     backgroundColor="#B23121" 
                     borderRadius={20}
                     style={styles.gmicon}
                     onPress={this.signInWithGoogle}
                     >
                    Signup With G-Mail
                    </MaterialCommunityIcons.Button>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={() => {
                  this.props.navigation.navigate('Signin');
                }} style={styles.footerLink}>Signin</Text></Text>
                </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  form: {
    width: '86%',
    marginTop: 15
  },
   image:{
        marginTop:80,
        height: 200,
        width: 225,
        alignSelf: "center",
        margin: 30,
        marginBottom: -10
    },
    account: {
       alignItems:'center',
       marginLeft: 40,
       marginRight:40,
       marginBottom:10,
       backgroundColor:"lightgreen",
    },
    gmailbutton:{
       marginLeft:30,
       marginRight:30,
       marginTop:10,
       alignItems:'center',
       borderRadius:10

    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink:{
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    fbbutton:{
       marginTop:30,
       marginLeft:30,
       marginRight:30,
       alignItems:'center',
       borderRadius:40,
    },
    fbicon:{
        borderRadius:30,
        width: 300,
        height:50

    },
    gmicon:{
        borderRadius:30,
        width: 300,
        height:50

    },
  
});
export default SignupScreen;