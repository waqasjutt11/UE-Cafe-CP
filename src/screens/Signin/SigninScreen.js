import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import image from '../../../assets/splash.png';
import "firebase/firestore";
import firebase from "firebase";

class SignInScreen extends React.Component {
  state = { email: '', password: '', errorMessage: '', loading: false };
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
  async signInWithEmail() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Wrong Password!');
          } else {
              this.onLoginFailure.bind(this)(errorMessage);
          }
      });
  }
  render() {
    return ( 
        <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
         <KeyboardAvoidingView style={styles.container}>
          <KeyboardAwareScrollView
                style={{marginBottom: 10}}
                keyboardShouldPersistTaps="always">
          <Image style={styles.image}
                       source={ image }
                       PlaceholderContent={<ActivityIndicator size='large' />}
         />
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#B1B1B1"
                returnKeyType="next"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#B1B1B1"
                returnKeyType="done"
                textContentType="newPassword"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            {this.renderLoading()}
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "red",
                width: "100%",
                marginBottom: 10
              }}
            >
              {this.state.error}
            </Text>
            <View  style={styles.button}>
                <Entypo.Button 
                name="login" 
                size={24} 
                color="white" 
                backgroundColor="skyblue"
                onPress={() => this.signInWithEmail()}
                >
                Login
                </Entypo.Button>
                </View>
            <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={() => {
                  this.props.navigation.navigate('Signup');
                }} style={styles.footerLink}>Signup</Text></Text>
                </View>
                </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:'#fff'
  },
  form: {
    width: "86%",
    marginTop: 15
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10, 
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: 323
  },
  image:{
    marginTop:70,
    height: 200,
    width: 225,
    alignSelf: "center",
    margin: 30,
    marginBottom: -10
},
    button: {
    alignItems: "center",
    backgroundColor:"skyblue",
    marginLeft: 50,
    marginRight: 50,
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#707070"
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
}
});
export default SignInScreen;
