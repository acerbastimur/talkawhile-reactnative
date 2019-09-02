import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/auth/login/LoginPage';
import Register from './pages/auth/register/RegisterPage';
import TabPage from './pages/tabs/TabPage';
import WatchComponent from './pages/watch/WatchPage';


// pages

const Navigator = () => {
  return (<AppContainer />)
}

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
  }, {
    initialRouteName: "Login",
    headerMode: "none"
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Auth: {
      screen: AuthNavigator
    },
    Tabs: {
      screen: TabPage
    },
    Watch: {
      screen: WatchComponent
    }
  }, {
    initialRouteName: "Tabs",
  });

const AppContainer = createAppContainer(AppNavigator);

export default Navigator;