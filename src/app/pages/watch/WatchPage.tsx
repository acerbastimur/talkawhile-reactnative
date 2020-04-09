import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Subtitle from './components/SubtitleComponent';
import ContentProvider from './schema/ContentProvider';
import {Playphrase, PhrasesItem} from '../../models/Playphrase';
import WatchEnd from './components/WatchEndComponent';
import ContentStore from '../../stores/ContentStore';
import {observer} from 'mobx-react';

export interface WatchProps {}

export interface WatchState {
  areContentsLoaded: boolean;
  player_paused: boolean;
}
@observer
export default class WatchComponent extends React.Component<
  WatchProps,
  WatchState
> {
  player: any;
  constructor(props: WatchProps) {
    super(props);
    this.state = {
      areContentsLoaded: false,
      player_paused: false,
    };
  }

  async componentDidMount() {
    Orientation.lockToLandscapeLeft();
    console.log('mount');
    await ContentStore.getAllPhrases();
    ContentStore.getRandomContent();
    this.setState({
      areContentsLoaded: true,
    });
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  onVideoEnd = () => {};

  public render() {
    console.log('rendered again');
    return this.state.areContentsLoaded ? (
      <View style={styles.container}>
        <TouchableOpacity
          style={{position: 'absolute', top: 20, left: 20, zIndex: 6}}>
          <Image
            source={require('../../../assets/images/watch/back.png')}
            style={{width: 14, height: 24}}
          />
        </TouchableOpacity>
        <Video
          source={{
            uri:
              ContentStore.currentPhrase &&
              ContentStore.currentPhrase['video-url'],
          }}
          ref={(ref: any) => {
            this.player = ref;
            ContentStore.playerInstance = ref;
          }}
          resizeMode={'cover'}
          style={styles.backgroundVideo}
          pasued={this.state.player_paused}
          onLoadStart = {()=> {
            console.log("STARTED TO LOAD THE VIDEO");
            ContentStore.toggleTalkDialog(false);

          }}
          onLoad={() => {
            ContentStore.toggleTalkDialog(false);
          }}
          
          onEnd={() => {
            ContentStore.toggleTalkDialog(true);
            this.setState({player_paused: true});
            console.log(this.state);
          }}
        />
        <View
          style={{
            zIndex: 6,
            position: 'absolute',
            bottom: 20,
            width: '100%',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Subtitle
            subtitle={
              ContentStore.currentPhrase && ContentStore.currentPhrase.text
            }
          />
        </View>
        {ContentStore.showTalkDialog ? (
          <View
            style={{
              zIndex: 5,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <WatchEnd />
          </View>
        ) : null}
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
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
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
  },
});
