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
import Watch from './components/WatchComponent';
import ContentProvider from './schema/ContentProvider';
import {Playphrase, PhrasesItem} from '../../models/Playphrase';

export interface WatchProps {}

export interface WatchState {
  showTalkDiaglog: boolean;
  areContentsLoaded: boolean;
  contents: PhrasesItem[];
  player_paused: boolean;
}

export default class WatchComponent extends React.Component<
  WatchProps,
  WatchState
> {
  player: any;
  contentProvider = new ContentProvider();
  currentContent: PhrasesItem = null;
  constructor(props: WatchProps) {
    super(props);
    this.state = {
      showTalkDiaglog: false,
      areContentsLoaded: false,
      contents: null,
      player_paused: false,
    };
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
    console.log('mount');

    this.contentProvider.getAllWordsContents().then(allContent => {
      this.setState({
        contents: allContent,
      });
    }).then(()=> {
      this.getRandomContent()
      this.setState({
                areContentsLoaded: true,
      })
    })
  }

  getRandomContent = () => {
    this.currentContent = null; // to remove old value
    const contents = this.state.contents;
    const randomContent = contents[Math.floor(Math.random() * contents.length)];
    this.currentContent = randomContent;
  };

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
          source={{uri: this.currentContent['video-url']}}
          ref={(ref: any) => {
            this.player = ref;
          }}
          resizeMode={'cover'}
          style={styles.backgroundVideo}
          pasued={this.state.player_paused}
          onEnd={() => {
            this.setState({showTalkDiaglog: true, player_paused: true});
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
          <Subtitle subtitle={this.currentContent.text} />
        </View>
        {this.state.showTalkDiaglog ? (
          <View
            style={{
              zIndex: 5,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {}
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
