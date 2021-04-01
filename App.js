import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantDetail: RestaurantDetailScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'FoodzY',
    },
  }
);

export default createAppContainer(navigator);
