import { createAppContainer, createStackNavigator } from 'react-navigation';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignupScreen } from './screens/SignupScreen';
import DrawerNavigator from './screens/DrawerNavigator';

const AppStackNavigator = createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  },
}, {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  });
const App = createAppContainer(AppStackNavigator);
export default App;

