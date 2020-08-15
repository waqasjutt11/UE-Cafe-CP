import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  Cartbutton:{
    borderRadius:20,
    fontSize: 12,
    backgroundColor: '#8A173F',
    color:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  Cartview:{
      marginBottom:8,
      marginRight:210,
      borderRadius:10,
      alignContent: 'center',
      alignItems:'center'
  }

});

export default styles;
