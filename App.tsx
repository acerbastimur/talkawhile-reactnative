import React from 'react';
import { SafeAreaView, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';

import Navigator from './src/app/Navigator';
import SemiModal from './src/app/common-components/SemiModal';
import { View } from 'native-base';
import SemiModalContainer from './src/app/common-components/SemiModalContainer';

class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
        <SemiModalContainer />
      </SafeAreaView >
    );
  }

};

export default App;
