import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import firebase from 'firebase';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CATEGORIES"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="EXPLORE"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
            />
            <MenuButton
            title="MY CART"
            source={require('../../../assets/icons/cart.png')}
            onPress={() => {
              navigation.navigate('Basket');
              navigation.closeDrawer();
            }}

            />
            <MenuButton
            title=" LOGOUT"
            source={require('../../../assets/icons/logout.png')}
            onPress={() => firebase.auth().signOut()
            }
            
          />
           <MenuButton
            title="PROFILE"
            source={require('../../../assets/icons/profil.png')}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
