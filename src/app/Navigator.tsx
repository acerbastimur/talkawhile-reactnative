import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/auth/login/LoginPage';
import Register from './pages/auth/register/RegisterPage';
import Tabs from './pages/tabs/Tabs';


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
    headerMode:"none"
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Auth: {
      screen: AuthNavigator
    },
    Tabs: {
      screen: Tabs
    }
  }, {
    initialRouteName: "Auth",
  });

const AppContainer = createAppContainer(AppNavigator);

export default Navigator;