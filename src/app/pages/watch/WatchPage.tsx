import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Subtitle from './components/SubtitleComponent';
import Watch from './components/WatchComponent';
import ContentProvider from './schema/ContentProvider';
import Player from './schema/Player';

export interface WatchProps {

}

export interface WatchState {
  showTalkDiaglog: boolean,
  areContentsLoaded: boolean
}

export default class WatchComponent extends React.Component<WatchProps, WatchState> {
  player: any;
  _Player = new Player();
  constructor(props: WatchProps) {
    super(props);
    this.state = {
      showTalkDiaglog: false,
      areContentsLoaded: false
    };
    const _ContentProvider = new ContentProvider();
    _ContentProvider.getDataFromApi("watch");

  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
    this._Player.main().then(() => {
      this.setState({
        areContentsLoaded: true
      })
    })

  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  public render() {

    return (
      this.state.areContentsLoaded ? <View style={styles.container}>
        <TouchableOpacity style={{ position: "absolute", top: 20, left: 20, zIndex: 6 }}>
          <Image source={require('../../../assets/images/watch/back.png')} style={{ width: 14, height: 24, }} />
        </TouchableOpacity>
        <Video source={{ uri: this._Player.getCurrentVideoUrl() }}
          ref={(ref: any) => {
            this.player = ref
          }}
          resizeMode={"cover"}
          style={styles.backgroundVideo}
          onEnd={() => { this.setState({ showTalkDiaglog: true }) }}
        />
        <View style={{ zIndex: 6, position: "absolute", bottom: 20, width: '100%', height: 45, justifyContent: "center", alignItems: "center" }}>
          <Subtitle subtitle={this._Player.getCurrentVideoSubtitle()} />
        </View>
        {this.state.showTalkDiaglog ?
          <View style={{ zIndex: 5, position: "absolute", width: '100%', height: '100%', justifyContent: "center", alignItems: "center" }}>
            <Watch />
          </View> : null}

      </View> : <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
      }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading</Text>
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