import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface LearningCardProps {
}

export default class LearningCard extends React.PureComponent<LearningCardProps, any> {
  constructor(props: LearningCardProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>LearningCard</Text>
      </View>
    );
  }
}
