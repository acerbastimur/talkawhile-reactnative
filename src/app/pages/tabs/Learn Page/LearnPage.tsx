import * as React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import LearnStyles from './LearnStyles';
import Header from './components/Header';
import LearningCard from './components/LearningCard';

export interface LearnPageProps {
}

export default class LearnPage extends React.PureComponent<LearnPageProps, any> {
  data = [
    { id: "0", text: 'To Be', imagePath: require('../../../../assets/images/learn/category0.png') },
    { id: "1", text: 'Animals', imagePath: require('../../../../assets/images/learn/category1.png') },
    { id: "2", text: 'School', imagePath: require('../../../../assets/images/learn/category2.png') },
    { id: "3", text: 'Cars', imagePath: require('../../../../assets/images/learn/category3.png') },
    { id: "4", text: 'Animals', imagePath: require('../../../../assets/images/learn/category4.jpg') },
  ]


  constructor(props: LearnPageProps) {
    super(props);
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          opacity: 0.2
        }}
      />
    );
  };
  headerSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          opacity: 0.4,
          marginTop: 10
        }}
      />
    );
  };
  public render() {
    return (
      <View style={LearnStyles.pageContainer}>
        <Header />
        <FlatList
          data={this.data}
          renderItem={({ item }) => (<LearningCard cardImage={item.imagePath} cardName={item.text} />)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}

        />
      </View>
    );
  }
}
