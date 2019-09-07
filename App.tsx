import React from 'react';
import { SafeAreaView, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';

import Navigator from './src/app/Navigator';
import SemiModal from './src/app/common-components/SemiModal';
import SemiModalContainer from './src/app/common-components/SemiModalContainer';
import { observer } from 'mobx-react';

class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView >
    );
  }

};

export default App;
