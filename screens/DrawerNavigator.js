import React from 'react';
import {
  View
} from 'react-native'
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreenTabNavigator from './HomeScreenTabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InnerStackNavigator = createStackNavigator({
  TabNavigator: {
    screen: HomeScreenTabNavigator,
    header: null
  }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <View style={{ padding: 10 }}>
          <Ionicons name="md-menu" size={24} onPress={() => { navigation.toggleDrawer() }} />
        </View>
      )
    })
  })

const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: { screen: InnerStackNavigator }
}, {
    defaultNavigationOptions: {
      header: null
    }
  });

export default createAppContainer(AppDrawerNavigator);
