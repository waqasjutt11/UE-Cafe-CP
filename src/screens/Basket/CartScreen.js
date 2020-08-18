import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, TextInput, Image, Dimensions} from 'react-native';
import FoodCart from './../../components/FoodCart/FoodCart';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import BackButton from './../../components/BackButton/BackButton';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getCategoryName, getCategoryById } from '../../data/MockDataAPI'
const { width: viewportWidth } = Dimensions.get('window');
class CartScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        
        headerRight: ( <FoodCart />),

        headerTransparent: 'true',
        headerLeft: () => <BackButton
          onPress={() => {
            navigation.goBack();
          }}
          />
        })
        constructor(props) {
            super(props);
            this.state = {
              activeSlide: 0
            };
          }
          renderImage = ({ item }) => (
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item }} />
              </View>
            </TouchableHighlight>
          );
          onPressIngredient = item => {
            var name = getIngredientName(item);
            let ingredient = item;
            this.props.navigation.navigate('Ingredient', { ingredient, name });
          };
          render() {
            const { navigation } = this.props;
            const item = navigation.getParam('item');
            const category = getCategoryById(item.categoryId);
            const title = getCategoryName(category.id);
    
            let data=[{
            value: 'Cash on Delivery',
    }]
        return(
            <View style={styles.infoContainer}>  
              { this.props.cartItems.length > 0 ?
                    <View>
                    <View style={styles.infoRecipeContainer}>
                    <Text style={styles.infoRecipeName}>{item.title}</Text>
                    <View style={styles.infoContainer}>
                      <TouchableHighlight
                        onPress={() => navigation.navigate('ProductList', { category, title })} >
                        <Text style={styles.category}>{getCategoryName(item.categoryId).toUpperCase()}</Text>
                      </TouchableHighlight>
                    </View>
          
                    <View style={styles.infoContainer}>
                      <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.jpg')} />
                      <Text style={styles.infoRecipe}>Time to deliver: {item.time} minutes </Text>
                    </View>
                    <View style={styles.infoContainer}>
                      <Image style={styles.infoPhoto} source={require('../../../assets/icons/bill.png')} />
                      <Text style={styles.infoRecipe}>Total Bill {item.price*this.props.cartItems.length} PKR</Text>
                    </View>
                    </View>
              <View>
                <View>
                  <View style={styles.form}>
                      <Text style={{marginLeft:20}}>
                          Address Details
                      </Text>
              <TextInput
                style={styles.input}
                placeholder="Shipping Address"
                placeholderTextColor="#B1B1B1"
              />
                <View   style={{marginLeft:30, width:315}}>
              <Dropdown 
              label="Payment Method"
              data={data} />
              </View>
            </View>
            </View>
            
        </View>
            <TouchableHighlight  onPress = {this.props.removeItem} products = {this.props.cartItems}>
            <View  style={styles.Cartview}>
            <Text style={styles.Cartbutton}>  Delete Order  <MaterialIcons name="delete-forever" size={16} color="#fff" />  </Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight>
            <View  style={styles.checkoutView}>
            <Text style={styles.Cartbutton}>  Confirm Order  <MaterialCommunityIcons name="check-outline" color='#fff' size={16}/>  </Text>
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
