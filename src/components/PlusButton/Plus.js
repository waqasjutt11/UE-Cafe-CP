import  React  from 'react';
import {Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';   
import { connect } from 'react-redux';
import {recipes} from '../../data/dataArrays'
class Plus extends React.Component{
    render(){
        return(
            <Text style={{ borderWidth:1, borderColor:'black'}}>
            <MaterialIcons name="add" size={24} color="black" 
           onPress={()=>(this.props.addItemToCart({recipes}))}
            />
              </Text>
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
export default connect(null, mapDispatchToProps)(Plus);

