import  React  from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons';   
import { connect } from 'react-redux';
class Remove extends React.Component{
    render(){
        return(
          <TouchableHighlight
          onPress={this.props.removeItem}
          products={this.props.cartItems}
          >
         <View>
          <Text style={{ borderWidth: 1, borderColor: "black" }}>
          <AntDesign
            name="minus"
            size={24}
            color="red"/>
        </Text> 
        </View>
        </TouchableHighlight>
        )
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
  export default connect(mapStateToProps, mapDispatchToProps)(Remove);

