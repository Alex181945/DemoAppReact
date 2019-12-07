import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../screens/Account/MyAccount";

const AccountScreenStack = createStackNavigator({
  Top: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "Cuenta"
    })
  }
});

export default AccountScreenStack;
