import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LearnStyles from './LearnStyles';
import Header from './components/Header';
import LearningCard from './components/LearningCard';

export interface LearnPageProps {
}

export default class LearnPage extends React.PureComponent<LearnPageProps, any> {
  constructor(props: LearnPageProps) {
    super(props);
  }

  public render() {
    return (
      <View style={LearnStyles.pageContainer}>
        <Header />
        <LearningCard />
      </View>
    );
  }
}
