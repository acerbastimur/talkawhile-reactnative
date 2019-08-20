import React from 'react';
import { SafeAreaView } from 'react-native';

import Navigator from './src/app/Navigator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
