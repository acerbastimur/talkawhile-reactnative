import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import LearnStyles from './LearnStyles';
import Header from './components/Header';
import LearningCard from './components/LearningCard';
import SemiModal from '../../../common-components/SemiModal';
import ModalStore from '../../../stores/ModalStore';
import ContentStore from '../../../stores/ContentStore';
import { observer } from 'mobx-react';
import RBSheet from "react-native-raw-bottom-sheet";
import SemiModalContainer from '../../../common-components/SemiModalContainer';


export interface LearnPageProps {
}
@observer
export default class LearnPage extends React.PureComponent<LearnPageProps, any> {
  RBSheet = null;
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
          height: 1.5,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          opacity: 0.6
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
        <SemiModalContainer />
        <Header />
        <FlatList
          data={ContentStore.content}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              console.log("touceh");
              ModalStore.setCard(item);
              ModalStore.openModal();

            }}>
              <LearningCard cardImage={item.img} cardName={item.categoryName} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.categoryId.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          style={{ height: '92%' }}
        />

      </View>

    );
  }
}
