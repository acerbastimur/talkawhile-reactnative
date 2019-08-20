import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface TabsProps {
}

export default class Tabs extends React.PureComponent<TabsProps, any> {
  constructor(props: TabsProps) {
    super(props);
  }
 
  public render() {
    return (
      <View>
        <Text>Tabs Page</Text>
      </View>
    );
  }
}
