import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

const SearchScreenStack = createStackNavigator({
  Top: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Buscador"
    })
  }
});

export default SearchScreenStack;
