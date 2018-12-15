import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Log In" onPress={() => { this.props.navigation.navigate('LoginScreen') }} />
        <Button title="Sign Up" onPress={() => { this.props.navigation.navigate('SignupScreen') }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
