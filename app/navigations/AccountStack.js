import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../screens/Account/MyAccount";
import LoginScreen from "../screens/Account//Login";

const AccountScreenStack = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "Cuenta"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login"
    })
  }
});

export default AccountScreenStack;
