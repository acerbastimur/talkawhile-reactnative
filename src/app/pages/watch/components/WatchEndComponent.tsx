import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {
  PassComponent,
  wordComponent,
  bottomButtonText,
  NextComponent,
  ReplayComponent,
  scoreComponent,
} from './WatchStaticSubcomponents';
import {toJS} from 'mobx';
import Voice from 'react-native-voice';
import ContentStore from '../../../stores/ContentStore';
import * as fuzball from 'fuzzball';

export interface WatchEndProps {}

export interface WatchEndState {
  isListening: boolean;
  didMatch: boolean;
  voiceResult: string;
  voiceResultRegisterDate: number;
  isRecord: boolean;
}

export default class WatchEnd extends React.Component<
  WatchEndProps,
  WatchEndState
> {
  public static defaultProps = {};
  constructor(props: WatchEndProps) {
    super(props);
    this.state = {
      isListening: false,
      didMatch: null,
      voiceResult: null,
      isRecord: null,
      voiceResultRegisterDate: null,
    };

    Voice.onSpeechStart = this._onSpeechStart;
    Voice.onSpeechEnd = this._onSpeechEnd;
    Voice.onSpeechPartialResults = this._onSpeechResults;
    Voice.onSpeechError = this._onSpeechError;
  }

  private _onSpeechStart = event => {
    console.log('onSpeechStart');
    this.setState({
      voiceResult: '',
      voiceResultRegisterDate: Date.now(),
    });

  /*   setTimeout(() => {
        if (this.state.voiceResult == '') {
        console.log('out of time');
        this._onRecordVoice();

        this.setState({
          isListening: !this.state.isListening,
        });
      }
    }, 2000); */
  };
  private _onSpeechEnd = event => {
    console.log('onSpeechEnd');
  };
  private _onSpeechResults = event => {
    this.setState({
      voiceResult: event.value[0],
      voiceResultRegisterDate: Date.now(),
    });
    console.log('results are updated');

    setTimeout(() => {
      var seconds = (Date.now() - this.state.voiceResultRegisterDate) / 1000;

      if (seconds > 2) {
        console.log('out of time');
        this._onRecordVoice();
        const copyCurrentPhraseText = toJS(ContentStore.currentPhrase.text);
        let similatiry = fuzball.ratio(
          this.state.voiceResult,
          copyCurrentPhraseText,
        );
        console.log(`Similarity is ${similatiry}`);
        this.setState({
          isListening: !this.state.isListening,
          didMatch: similatiry > 93 ? true : false,
        });
      }
    }, 2000);
  };
  private _onSpeechError = event => {
    console.log('_onSpeechError');
    this.stateCleaner()
  };

  private _onRecordVoice = () => {
     const {isRecord} = this.state;
    if (isRecord) {
      Voice.stop();
    } else {
      Voice.start('en-US');
    }
    this.setState({
      isRecord: !isRecord,
    });
  };

  stateCleaner = () => {
    console.log("STATES CLEANED")
    this.setState({
      isListening: false,
      didMatch: null,
      voiceResult: null,
      isRecord: null,
      voiceResultRegisterDate: null,
    });
    Voice.stop();

  }
  toggleListening = () => {
    this._onRecordVoice();

    this.setState({
      isListening: !this.state.isListening,
    });
  };

  answerResultComponentContainerRight = () => {
    if (this.state.isListening) {
      return scoreComponent();
    } else {
      if (this.state.didMatch === true) {
        return <NextComponent stateCleaner={this.stateCleaner} />;
      } else if (this.state.didMatch === false) {
        return <ReplayComponent />;
      }
      return scoreComponent();
    }
  };

  answerResultComponentContainerMid = () => {
    if (this.state.isListening) {
      return (
        <View
           style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../../assets/images/watch/stop.png')}
            style={{width: 150, height: 150}}
          />
          {bottomButtonText('Listening...')}
        </View>
      );
    } else {
      if (this.state.didMatch === true) {
        return (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../../../assets/images/watch/ok.png')}
              style={{width: 150, height: 150}}
            />
            {bottomButtonText('Correct!')}
          </View>
        );
      } else if (this.state.didMatch === false) {
        return (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../../../assets/images/watch/sorry.png')}
              style={{width: 150, height: 150}}
            />
            {bottomButtonText("It wasn't correct!")}
          </View>
        );
      }
      return (
        <TouchableOpacity
          onPress={this.toggleListening}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../../assets/images/watch/speak.png')}
            style={{width: 150, height: 150}}
          />
          {bottomButtonText('Press to talk')}
        </TouchableOpacity>
      );
    }
  };

  componentDidMount() {}
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
  public render() {
    return (
      <View style={styles.container}>
        <Image
          style={{opacity: 0.8}}
          resizeMode="cover"
          source={require('../../../../assets/images/watch/blur.jpg')}
          blurRadius={10}
        />

        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            position: 'absolute',
            zIndex: 6,
          }}>
          <View
            style={{
              flex: 0.3333,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {!this.state.isListening && this.state.didMatch === false ? (
              <PassComponent stateCleaner={this.stateCleaner} />
            ) : (
              wordComponent()
            )}
          </View>
          <View
            style={{
              flex: 0.3333,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              {this.answerResultComponentContainerMid()}
            </View>
          </View>
          <View
            style={{
              flex: 0.3333,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {this.answerResultComponentContainerRight()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
