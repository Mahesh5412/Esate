import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import RNExitApp from 'react-native-exit-app';

export default class LogoutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
            onPress={this._signOutAsync} 
           title="I'm done, sign me out"
            color= '#EC1B85' 
           />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
   // this.props.navigation.navigate('Auth');
    RNExitApp.exitApp();
  };
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});

