import React from 'react';
import {View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'react-native-vector-icons/Ionicons';
class CheckoutScreen extends React.Component{
    render(){
        let data=[{
                value: 'Cash on Delivery',
        }]
        return(
            <View>
                  <View style={styles.form}>
                      <Text style={{marginLeft:20}}>
                          Address Details
                      </Text>
              <TextInput
                style={styles.input}
                placeholder="Block Name and Room No"
                placeholderTextColor="#B1B1B1"
              />
              <View   style={{marginLeft:30, width:315}}>
              <Dropdown 
              label="Select Payment Method"
              data={data} />
              </View>
            </View>
            <TouchableHighlight>
            <View  style={styles.Cartview}>
            <Text style={styles.Cartbutton}>  Confirm Order </Text>
            </View>
            </TouchableHighlight>
            </View>
        )
    }
}
export default CheckoutScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor:'#fff'
    },
    form: {
      width: "86%",
      marginTop: 15
    },
    Cartbutton:{
      color:'#fff',
    },
    input: {
      height: 48,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft: 10, 
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      width: 323
    },
    Cartview:{
      alignContent: 'center',
      alignItems:'center',
      backgroundColor: '#2cd18a',
      alignItems: 'center',
      justifyContent:'center',
      fontSize: 14,
      height: 50,
      width: 270,
      marginTop: 20,
      marginLeft: 45,
      marginRight: 10,
      borderRadius: 100,
      borderColor: '#2cd18a',
      borderWidth: 1,
    },
})