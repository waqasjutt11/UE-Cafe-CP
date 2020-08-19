import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import image from "../../../assets/splash.png";
import "firebase/firestore";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
Facebook.initializeAsync("749884709129361", "UE Cafe");
class SignupScreen extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    errorMessage: "",
    loading: false,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user);
      }
    });
  }
  onLoginSuccess() {
    this.props.navigation.navigate("Home");
  }
  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false });
  }
  renderLoading() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size={"large"} />
        </View>
      );
    }
  }
  async signInWithFacebook() {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        "749884709129361",
        {
          permissions: ["email", "public_profile", "user_name", "user_friends"],
        }
      );
      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            console.log("user signed in");
            firebase
              .database()
              .ref("/users/facebookusers/" + result.user.uid)
              .set({
                email: result.user.email,
                profile_picture: result.additionalUserInfo.profile.picture,
                displayName: result.user.displayName,
              });
          });
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function (result) {
              console.log("user signed in");
              firebase
                .database()
                .ref("/users/googleusers/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  locale: result.additionalUserInfo.profile.locale,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                })
                .then(function (snapshot) {
                  //console.log('snapshot', snapshot)
                });
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in");
        }
      }.bind(this)
    );
  };
  async signInWithGoogle() {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        androidClientId:
          "424296049588-3pd2beb7b7lkrljhkat4uasnk6fpd5ov.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        this.onSignIn(result);

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
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
            <Image
              style={styles.image}
              source={image}
              PlaceholderContent={<ActivityIndicator size="large" />}
            />

            {this.renderLoading()}
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "red",
                width: "80%",
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
            <View style={styles.gmailbutton}>
              <MaterialCommunityIcons.Button
                name="gmail"
                size={24}
                backgroundColor="#B23121"
                borderRadius={20}
                style={styles.gmicon}
                onPress={() => this.signInWithGoogle()}
              >
                Signup With G-Mail
              </MaterialCommunityIcons.Button>
            </View>
            <View style={styles.footerView}>
              <Text style={styles.footerText}>
                Already got an account?{" "}
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("Signin");
                  }}
                  style={styles.footerLink}
                >
                  Signin
                </Text>
              </Text>
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
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  form: {
    width: "86%",
    marginTop: 15,
  },
  image: {
    marginTop: 80,
    height: 200,
    width: 225,
    alignSelf: "center",
    margin: 30,
    marginBottom: -10,
  },
  account: {
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    backgroundColor: "lightgreen",
  },
  gmailbutton: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
  fbbutton: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    borderRadius: 40,
  },
  fbicon: {
    borderRadius: 30,
    width: 300,
    height: 50,
  },
  gmicon: {
    borderRadius: 30,
    width: 300,
    height: 50,
  },
});
export default SignupScreen;
