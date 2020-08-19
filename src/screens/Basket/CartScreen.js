import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import FoodCart from "./../../components/FoodCart/FoodCart";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Dropdown } from "react-native-material-dropdown";
import BackButton from "./../../components/BackButton/BackButton";
class CartScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <FoodCart />,

    headerTransparent: "true",
    headerLeft: () => (
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
  });
  render() {
    let data = [
      {
        value: "Cash on Delivery",
      },
    ];
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
      <View style={styles.infoContainer}>
        {this.props.cartItems.length > 0 ? (
          <View style={styles.infoRecipeContainer}>
            <View>
              <View>
                <View style={styles.form}>
                  <Text style={{ marginLeft: 10, marginTop:100 }}>Address Details</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Shipping Address"
                    placeholderTextColor="#B1B1B1"
                  />
                  <View style={{ marginLeft: 10, width: 'auto' }}>
                    <Dropdown label="Payment Method" data={data} />
                  </View>
                </View>
              </View>
            </View>
            <TouchableHighlight
              onPress={this.props.removeItem}
              products={this.props.cartItems}
            >
              <View style={styles.Cartview}>
                <Text style={styles.Cartbutton}>
                  Delete Order
                  <MaterialIcons
                    name="delete-forever"
                    size={16}
                    color="#fff"
                  />
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
            onPress={()=>Alert.alert('Your order has been placed Please wait...')}
            >
              <View style={styles.checkoutView}>
                <Text style={styles.Cartbutton}>
                  Confirm Order
                  <MaterialCommunityIcons
                    name="check-outline"
                    color="#fff"
                    size={16}
                    
                  />
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          
        ) : (
          <View style={styles.ifcontainer}>
            <Text style={styles.iconalert}>
              <FontAwesome5 name="smile" size={100} color="#f57f17" />
            </Text>
            <Text style={styles.cartalert}> NO FOOD ITEMS IN YOUR CART </Text>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <View style={styles.Cartview}>
                <Text style={styles.Cartbutton}>Continue To Eating</Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
      </View>
      </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
