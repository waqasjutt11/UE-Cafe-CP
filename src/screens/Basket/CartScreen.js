import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import FoodCart from './../../components/FoodCart/FoodCart';
import styles from './styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
class CartScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        headerRight: ( <FoodCart />)
      });
    render(){
        return(
            <View style={styles.infoContainer}>  
              { this.props.cartItems.length > 0 ?
              <View>
            <TouchableHighlight  onPress = {this.props.removeItem} products = {this.props.cartItems}>
            <View  style={styles.Cartview}>
            <Text style={styles.Cartbutton}>  Delete Order  <MaterialIcons name="delete-forever" size={16} color="#fff" />  </Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Checkout')}>
            <View  style={styles.checkoutView}>
            <Text style={styles.Cartbutton}>  Checkout  <MaterialCommunityIcons name="check-outline" color='#fff' size={16}/>  </Text>
            </View>
            </TouchableHighlight>
            </View>
            :
            <View style={styles.ifcontainer}>
                <Text style={styles.iconalert}>
                <FontAwesome5 name="smile" size={100} color="#f57f17" />
                </Text>
                <Text style={styles.cartalert}>  NO FOOD ITEMS IN YOUR CART </Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                <View style={styles.Cartview}>
                <Text style={styles.Cartbutton}>
                    Continue To Eating
                </Text>
                </View>
                </TouchableHighlight>
          </View>
            }
            </View>   
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        cartItems:state 
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem:(product) => dispatch({
            type:"REMOVE_FROM_CART" ,
            payload:product
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);