import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import { Function } from '@babel/types';
import ModalStore from '../../../../stores/ModalStore';
export interface LearningCardProps {
  cardImage: any;
  cardName: string;
}
export default class LearningCard extends React.PureComponent<LearningCardProps, any> {
  constructor(props: LearningCardProps) {
    super(props);
  }


  public render() {
    const { cardName, cardImage } = this.props;
    return (
      <View style={styles.container}   >

        <Image
          source={{ uri: this.props.cardImage }} style={{ width: 90, height: 90, borderRadius: 20, marginHorizontal: 15, resizeMode: "cover", }} />
        <View style={{ width: '40%', height: 90, flexDirection: "column" }}>
          <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
            <Text style={{
              color: "black",
              fontSize: 22,
              fontFamily: "Exo-Bold",
              marginRight: 8,
              maxWidth: 200
            }}>{cardName.charAt(0).toUpperCase() + cardName.slice(1)}</Text>
          </View>
          <View style={{ flex: 0.5, flexDirection: "column", }}>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <Text style={{
                color: "#FA811B",
                fontSize: 16,
                textAlign: "center",
                fontFamily: "Exo-Bold", marginRight: 8
              }}>23</Text>
              <Image source={require("../../../../../assets/images/learn/flame.png")} style={{ width: 18, height: 18, resizeMode: "contain" }} />
            </View>
          </View>
        </View>
        <View style={{ flex: 1, height: 90, flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
          <Image style={{ width: 40, height: 40 }}
            source={require('../../../../../assets/images/learn/speak.png')} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 90,
    margin: 8,

  }
});