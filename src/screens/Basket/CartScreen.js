import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert, Keyboard
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
    headerTransparent: "true",
    headerLeft: () => (
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
  });
  constructor(props) {
    super(props);
    this.state = {
      TextInputAdress: '',
      TextInputNumber: '',
    };
  }
  
  CheckTextInput = () => {
    if (this.state.TextInputAdress != '') {
      if (this.state.TextInputNumber != '') {
        if(this.state.CodeInput != '') {
        Alert.alert('Your Order has been Placed successfully. Thanku you for choosing UE-Cafeteria')
        console.log('Shipping Address=', this.state.TextInputAdress)
        console.log('Phone Code:', this.state.CodeInput)
        console.log('Phone Number:', this.state.TextInputNumber)
        console.log('Order has been Recieved')
        } else {
           alert('Please Select Your Phone Code')
        }
     } else {
        alert('Please Enter Valid Phone Number');
      }
    } else {
      alert('Please Enter Valid Adress');
    }
  };

  state = {
    value: null
};
  handleChange = (event) => {
    this.setState({
        value: event.target.value
    });
}
  render() {
    let data = [
      {
        value: "Cash on Delivery",
      },
    ];
    let phoneData = [
        {value:"0300"}, 
        {value:"0301"}, 
        {value:"0302"}, 
        {value:'0303'},
        {value:'0304'},
        {value:'0305'},
        {value:'0306'},
        {value:'0307'},
        {value:'0308'},
        {value:'0309'},
        {value:"0310"}, 
        {value:"0311"}, 
        {value:"0312"}, 
        {value:"0313"}, 
        {value:'0314'},
        {value:'0315'},
        {value:'0316'},
        {value:'0317'},         
        {value:'0318'},
        {value:'0319'}, 
        {value:"0320"}, 
        {value:"0321"}, 
        {value:"0322"}, 
        {value:"0323"},
        {value:'0324'},
        {value:'0325'},
        {value:'0326'},
        {value:'0327'},
        {value:'0328'},
        {value:'0329'}, 
        {value:"0330"}, 
        {value:"0331"}, 
        {value:"0332"}, 
        {value:"0333"},
        {value:'0334'},
        {value:'0335'},
        {value:'0336'},
        {value:'0337'},
        {value:'0338'},
        {value:'0339'},
        {value:"0340"}, 
        {value:"0341"}, 
        {value:"0342"}, 
        {value:"0343"}, 
        {value:'0344'},
        {value:'0345'},
        {value:'0346'},
        {value:'0347'},
        {value:'0348'},
        {value:'0349'},


      ]
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
                    onChangeText={TextInputAdress => this.setState({ TextInputAdress })}
                    maxLength={100}
                  />
                  
                  <View style={{ marginLeft: 10, width: 'auto' }}>
                    <Dropdown label="Payment Method" data={data} />
                  </View>
                  
                  <View style={{ marginLeft: 10}}>
                    <Dropdown label="Select your code" 
                     data={phoneData} 
                     onChangeText={CodeInput => this.setState({ CodeInput })}/>
                    </View>
                    <TextInput 
                    style={styles.input}
                    placeholder="Enter valid Phone number"
                    keyboardType="numeric"
                    maxLength={7}
                    minValue={7}
                    onChangeText={TextInputNumber => this.setState({ TextInputNumber})}
                    />
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
            onPress={this.props.removeItem}
            products={this.props.cartItems}
            onPress={
              () => {this.CheckTextInput();
            }}
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
