import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreenStacks from "./HomeStack";
import TopScreenStacks from "./TopStack";
import SearchScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./AccountStack";

const NavigationStacks = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Top: {
      screen: TopScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Top",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Account: {
      screen: AccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="account-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Account",
    order: ["Home", "Search", "Top", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#c93c20"
    }
  }
);

export default createAppContainer(NavigationStacks);
