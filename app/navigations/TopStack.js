import { createStackNavigator } from "react-navigation-stack";
import TopScreen from "../screens/Top";

const TopScreenStack = createStackNavigator({
  Top: {
    screen: TopScreen,
    navigationOptions: () => ({
      title: "Nuestro mejores socios"
    })
  }
});

export default TopScreenStack;
