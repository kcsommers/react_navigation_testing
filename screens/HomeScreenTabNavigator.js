import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenOne } from './ScreenOne';
import { ScreenTwo } from './ScreenTwo';

const HomeScreenTabNavigator = createBottomTabNavigator({
  ScreenOne: {
    screen: ScreenOne,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Feed',
      tabBarIcon: () => <Ionicons name="md-compass" size={24} />
    }
  },
  ScreenTwo: {
    header: null,
    screen: ScreenTwo,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: () => <Ionicons name="md-cog" size={24} />
    }
  }
}, {
    defaultNavigationOptions: {
      header: null
    }
  });

export default createAppContainer(HomeScreenTabNavigator)
