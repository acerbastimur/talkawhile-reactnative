import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import firebase from 'react-native-firebase';

import Navigator from './src/app/Navigator';

const App = () => {
  firebase.database().ref().once('value', data => {
    console.log(data.val());

  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
