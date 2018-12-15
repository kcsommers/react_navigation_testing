import React from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';

export class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Complete Login" onPress={() => { this.props.navigation.navigate('DrawerNavigator') }} />
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
