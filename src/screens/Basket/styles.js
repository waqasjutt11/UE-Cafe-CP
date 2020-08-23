import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  
infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
    Cartbutton:{
      color:'#fff',
      fontSize:16
    },
    Cartview:{
      alignContent: 'center',
      alignItems:'center',
      backgroundColor: '#8A173F',
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
    cartalert:{
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'center',
      color:'#8A173F',
      fontSize:16,
      marginLeft: 65,
      marginBottom:30,
      
    },
    iconalert:{
      marginTop:150,
      marginLeft:130,
      marginBottom:25
    },
    input: {
      height: 48,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft:10,
      paddingLeft: 10, 
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      width:335
      
    },
    checkoutView:{
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
      borderColor: '#8A173F',
      borderWidth: 1,
    }
  
});

export default styles;