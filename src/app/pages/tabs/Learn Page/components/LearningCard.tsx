import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export interface LearningCardProps {
}

export default class LearningCard extends React.PureComponent<LearningCardProps, any> {
  constructor(props: LearningCardProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../../../assets/images/learn/category1.jpg')} style={{ width: 120, height: 120, borderRadius: 20, marginHorizontal: 20, resizeMode: "cover" }} />
        <View style={{ width: '40%', height: 120, flexDirection: "column" }}>
          <View style={{ flex: 0.5, flexDirection: "column", justifyContent: "flex-start" }}>
            <Text style={{
              color: "black",
              fontSize: 24,
              fontFamily: "Exo-Bold",
            }}>To Be</Text>
          </View>
          <View style={{ flex: 0.5, flexDirection: "column" }}>

          </View>
        </View>
        <View style={{ flex: 1, height: 120, flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
          <Image style={{ width: 50, height: 50 }}
            source={require('../../../../../assets/images/learn/speak.png')} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 120,
    margin: 10
  }
});