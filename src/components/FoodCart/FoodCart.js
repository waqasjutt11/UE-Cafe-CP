import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
class FoodCart extends React.Component{
    render () {
        return(
            <View style={{padding: 5}}>
                <View style={{
                    position:"absolute",
                    height: 30,
                    width:30,
                    borderRadius:15,
                    backgroundColor: 'rgba(95, 197, 125, 0.8)',
                    right: 15,
                    bottom: 15,
                    alignItems:'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <Text style={{fontWeight:'bold', color:'#fff'}}>{this.props.cartItems.length}</Text>
                </View>
                <Icon name="ios-basket" 
                size={40}
                color='#8A173F'
                onPress={()=> this.props.navigation.navigate('Basket')}/>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(withNavigation(FoodCart));
const styles =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})