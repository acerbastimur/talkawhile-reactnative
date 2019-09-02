import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface WatchProps {
}

export interface WatchState {
}

export default class WatchComponent extends React.Component<WatchProps, WatchState> {
  constructor(props: WatchProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
        <Text>Watch Component</Text>
      </View>
    );
  }
}
