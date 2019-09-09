import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Subtitle from './components/Subtitle';
import Watch from './components/Watch';

export interface WatchProps {

}

export interface WatchState {
  subtitle: string
}

export default class WatchComponent extends React.Component<WatchProps, WatchState> {
  player: any;

  constructor(props: WatchProps) {
    super(props);
    this.state = {
      subtitle: "hello"
    };
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();

  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  public render() {
    const url = 'https://playphraseme8video.blob.core.windows.net/media/5b183cb48079eb4cd4a5d59d/5b4a789ccc7785588aba5575.mp4'

    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ position: "absolute", top: 20, left: 20, zIndex: 6 }}>
          <Image source={require('../../../assets/images/watch/back.png')} style={{ width: 14, height: 24, }} />
        </TouchableOpacity>
        <Video source={{ uri: url }}
          ref={(ref: any) => {
            this.player = ref
          }}
          resizeMode={"cover"}
          style={styles.backgroundVideo} />
        <View style={{ zIndex: 6, position: "absolute", bottom: 20, width: '100%', height: 45, justifyContent: "center", alignItems: "center" }}>
          <Subtitle subtitle="That doesn't matter at all!" />
        </View>
        <View style={{ zIndex: 5, position: "absolute", width: '100%', height: '100%', justifyContent: "center", alignItems: "center" }}>
          <Watch />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }, backgroundVideo: {
    width: '100%',
    height: '100%',
    alignSelf: "center",
    position: "absolute",
    zIndex: 1
  },
})