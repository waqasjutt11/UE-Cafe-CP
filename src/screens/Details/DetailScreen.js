import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getCategoryName, getCategoryById } from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import Plus from '../../components/PlusButton/Plus';
const { width: viewportWidth } = Dimensions.get('window');

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      headerLeft: () => <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = item => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={c => {
                this.slider1Ref = c;
              }}
              data={item.photosArray}
              renderItem={this.renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={index => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              onPress={() => navigation.navigate('ProductList', { category, title })} >
              <Text style={styles.category}>{getCategoryName(item.categoryId).toUpperCase()}</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.jpg')} />
            <Text style={styles.infoRecipe}>Time to deliver: {item.time} minutes </Text>
          </View>
          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/price.jpg')} />
            <Text style={styles.infoRecipe}>Price {item.price} PKR </Text>
          </View>
          <View style={styles.infoContainer1}>
           <Plus/>
          <Text style={{borderWidth:1, borderColor:'black'}}> 
            <Image style={styles.infoPhoto}  source={require('../../../assets/icons/quantity.png')} />
            <Text  style={{marginBottom:10, marginTop:10, fontSize:18,}}> Quantity= {this.props.cartItems.length} 
          </Text>
          </Text>
          <Text style={{ borderWidth:1, borderColor:'black',}}>
          <AntDesign name="minus" size={24} color="black"
          onPress={()=>{this.props.cartItems.length-1 }}
          />
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/bill.png')} />
            <Text style={styles.infoRecipe}>Total Bill {item.price*this.props.cartItems.length} PKR</Text>
          </View>

          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              onPress={() => {
                let ingredients = item.ingredients;
                let title = 'Ingredients for ' + item.title;
                navigation.navigate('IngredientsDetails', { ingredients, title });
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Basket')}>
            <View  style={styles.CartButton}>
            <Text style={styles.text}> Place An Order </Text>
            </View>
           </TouchableHighlight>
           </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      cartItems: state
  }
}
export default  connect(mapStateToProps)(withNavigation(DetailScreen));