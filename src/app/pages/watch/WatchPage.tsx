import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';

export interface WatchProps {

}

export interface WatchState {
}

export default class WatchComponent extends React.Component<WatchProps, WatchState> {
  player: any;
  public static defaultProps = {
    foo: "default" //! REMOVE THIS LINE 
  };
  constructor(props: WatchProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    const url = 'https://vjs.zencdn.net/v/oceans.mp4'

    return (
      <View style={styles.container}>
        <Video source={{ uri: url }} 
          ref={(ref) => {
            this.player = ref
          }}                                
          style={styles.backgroundVideo} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }, backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})