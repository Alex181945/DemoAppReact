import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home";
import MapUserScreen from "../screens/Map/MapUserConsumer";

const HomeScreenStacks = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: "Inicio"
    })
  },
  MapUser: {
    screen: MapUserScreen,
    navigationOptions: () => ({
      title: "Mapa"
    })
  }
});

export default HomeScreenStacks;
