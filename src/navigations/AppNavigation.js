import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen  from '../screens/Loading/LoadingScreen';
import SignInScreen from '../screens/Signin/SigninScreen'
import SignupScreen from '../screens/Signup/SignupScreen'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import DetailScreen from '../screens/Details/DetailScreen'
import ProductListScreen from '../screens/ProductList/ProductListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import CartScreen from './../screens/Basket/CartScreen';

import CheckoutScreen from '../screens/Checkout/CheckoutScreen'

const MainNavigator = createStackNavigator(
  {
    Loading: LoadingScreen,
    Signin: SignInScreen,
    Signup: SignupScreen,
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Details: DetailScreen,
    ProductList: ProductListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    Basket: CartScreen,
   
  },
  {
    initialRouteName: 'Loading',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
); 

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 225,
    contentComponent: DrawerContainer
  }
);
 
export default AppContainer = createAppContainer(DrawerStack)

console.disableYellowBox = true;