import  React  from 'react';
import {Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';   
import { connect } from 'react-redux';
import {recipes} from '../../data/dataArrays'
import { TouchableHighlight } from 'react-native-gesture-handler';
class Plus extends React.Component{
    render(){
        return(
          <TouchableHighlight 
          onPress={()=>(this.props.addItemToCart({recipes}))}>
            <Text style={{ borderWidth:1, borderColor:'black'}}>
            <MaterialIcons name="add" size={24} color="#2cd18a" 
           
            />
              </Text> 
              </TouchableHighlight>
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

