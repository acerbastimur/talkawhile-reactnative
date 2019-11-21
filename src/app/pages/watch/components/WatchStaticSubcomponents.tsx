import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import * as React from 'react';
import ContentStore from '../../../stores/ContentStore';

export const wordComponent = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={require('../../../../assets/images/watch/word.png')}
        style={{width: 36, height: 42}}
      />
      <Text
        style={{
          marginLeft: 10,
          color: '#BFF199',
          fontFamily: 'Exo-Bold',
          fontSize: 24,
        }}>
        {ContentStore.currentPhrase.word}
      </Text>
    </View>
  );
};

export const scoreComponent = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={require('../../../../assets/images/watch/hot.png')}
        style={{width: 32, height: 46}}
        resizeMode={'contain'}
      />
      <Text
        style={{
          marginLeft: 10,
          color: '#F4F4F4',
          fontFamily: 'Exo-Bold',
          fontSize: 24,
        }}>
        12
      </Text>
    </View>
  );
};

export class ReplayComponent extends React.Component {
  state = {
    isLoading: false,
  };
  render() {
    return (
      <View>
        {this.state.isLoading ? (
          <View style={{width: 50, height: 50}}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'column', alignItems: 'center'}}
            onPress={() => {
              ContentStore.replayPhrase();
            }}>
            <View>
              <Image
                source={require('../../../../assets/images/watch/retry.png')}
                style={{width: 108, height: 108}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  color: '#F4F4F4',
                  fontFamily: 'Exo-Bold',
                  fontSize: 24,
                  marginTop: 12,
                  textAlign: 'center',
                }}>
                Replay
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
export interface PassComponentProps {
  stateCleaner: any;
}

export class PassComponent extends React.Component<PassComponentProps, any> {
  state = {
    isLoading: false,
  };
  render() {
    return (
      <View>
        {this.state.isLoading ? (
          <View style={{width: 50, height: 50}}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'column', alignItems: 'center'}}
            onPress={() => {
              this.props.stateCleaner();
              ContentStore.getRandomContent();
              console.log('get random content');
              this.setState({
                isLoading: true,
              });
            }}>
            <View>
              <Image
                source={require('../../../../assets/images/watch/next.png')}
                style={{width: 108, height: 108}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  color: '#F4F4F4',
                  fontFamily: 'Exo-Bold',
                  fontSize: 24,
                  marginTop: 12,
                  textAlign: 'center',
                }}>
                Pass
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export interface NextComponentProps {
  stateCleaner: any;
}

export class NextComponent extends React.Component<NextComponentProps, any> {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <View>
        {this.state.isLoading ? (
          <View style={{width: 50, height: 50}}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'column', alignItems: 'center'}}
            onPress={() => {
              ContentStore.getRandomContent();
              console.log('get random content');
              this.state.isLoading = true;
              this.props.stateCleaner();
            }}>
            <View>
              <Image
                source={require('../../../../assets/images/watch/next.png')}
                style={{width: 108, height: 108}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  color: '#F4F4F4',
                  fontFamily: 'Exo-Bold',
                  fontSize: 24,
                  marginTop: 12,
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export const bottomButtonText = (text: string) => {
  return (
    <Text
      style={{
        color: '#fff',
        fontFamily: 'Exo-Medium',
        fontSize: 28,
        marginTop: 4,
      }}>
      {' '}
      {text}
    </Text>
  );
};
