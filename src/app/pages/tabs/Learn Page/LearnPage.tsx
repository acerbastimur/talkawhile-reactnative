import * as React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import LearnStyles from './LearnStyles';
import Header from './components/Header';
import LearningCard from './components/LearningCard';

export interface LearnPageProps {
}

export default class LearnPage extends React.PureComponent<LearnPageProps, any> {
  data = [
    { id: "0", text: 'View' },
    { id: "1", text: 'Text' },
    { id: "2", text: 'Image' },
    { id: "3", text: 'ScrollView' },
    { id: "4", text: 'ListView' },
  ]


  constructor(props: LearnPageProps) {
    super(props);
  }

  public render() {
    return (
      <View style={LearnStyles.pageContainer}>
        <Header />
        <FlatList
          data={this.data}
          renderItem={() => (<LearningCard />)}
          keyExtractor={item => item.id} />
      </View>
    );
  }
}
