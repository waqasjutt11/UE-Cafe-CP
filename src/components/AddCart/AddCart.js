import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { recipes } from '../../data/dataArrays'
import Icon from 'react-native-vector-icons/Ionicons';

import { connect }  from 'react-redux';
class AddCart extends React.Component {
    render () {
        return(
          <View>
            <TouchableHighlight onPress={()=>(this.props.addItemToCart({recipes}))}>
            <View  style={styles.Cartview}>
            <Text style={styles.Cartbutton}>  ADD TO CART  <Icon name="ios-basket" color='#fff'/> </Text>
            </View>
           </TouchableHighlight>
           </View>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
      addItemToCart : (product) => dispatch({
        type:"ADD_TO_CART",
        payload:product
      })
    }
  }
  export default connect(null, mapDispatchToProps)(AddCart)

  const styles = StyleSheet.create({
    Cartbutton:{
      fontSize: 12,
      marginLeft: 5,
      backgroundColor: '#8A173F',
      color:'#fff',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
    },
    Cartview:{
        marginBottom:8,
        marginRight:210,
        
        alignContent: 'center',
        alignItems:'center'
    }
        
        
    });
  