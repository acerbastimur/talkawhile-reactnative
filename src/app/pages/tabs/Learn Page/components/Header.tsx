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
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginBottom: 10 }}>
          <Image
            style={styles.flag}
            source={require('../../../../../assets/images/flag.png')}
          />
          <Text style={styles.text}>Select a Category</Text>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
            opacity: 1,
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    marginTop: 30,
  }, flag: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 40,
  },

  text: {
    color: "#333333",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Exo-Bold",
    marginRight: 10
  }
})