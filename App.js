import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentsScreen';
import ListsScreen from './src/screens/ListsScreen';
import Exercise from './src/screens/ExersiceScreen';
import ImageScreen from './src/screens/ImageScreen';
import Counter from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    List: ListsScreen,
    Exer:Exercise,
    My_img:ImageScreen,
    Counter:Counter,
    ColorScreen:ColorScreen,
    Square:SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
