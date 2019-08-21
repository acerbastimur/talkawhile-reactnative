import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export interface HeaderProps {
}

export default class Header extends React.PureComponent<HeaderProps, any> {
  constructor(props: HeaderProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', }}>
          <Image
            style={styles.flag}
            source={require('../../../../../assets/images/flag.png')}
          />
          <Text style={styles.text}>Select a Category</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.11,
    flexDirection: "column",
    width: "100%",
    marginTop: 30
  }, flag: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 40
  },

  text: {
    color: "#333333",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Exo-Bold",
    marginRight: 10
  }
})