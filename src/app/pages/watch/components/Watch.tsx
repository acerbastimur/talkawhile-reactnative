import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import BlurOverlay, { closeOverlay, openOverlay } from 'react-native-blur-overlay';

export interface WatchProps {
}

export interface WatchState {
    isListening: boolean;
    didMatch: boolean;
}

export default class Watch extends React.Component<WatchProps, WatchState> {
    public static defaultProps = {
    };
    constructor(props: WatchProps) {
        super(props);
        this.state = {
            isListening: false,
            didMatch: null
        };
    }


    toggleListening = () => {
        this.setState({
            isListening: !this.state.isListening
        });
        setTimeout(() => {
            this.setState({
                isListening: !this.state.isListening,
                didMatch: true
            });

        }, 2000)
    }

    wordComponent = () => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require('../../../../assets/images/watch/word.png')} style={{ width: 36, height: 42 }} />
                <Text style={{
                    marginLeft: 10,
                    color: "#BFF199",
                    fontFamily: "Exo-Bold",
                    fontSize: 24,
                }}>care</Text>
            </View>
        )
    }


    scoreComponent = () => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require('../../../../assets/images/watch/hot.png')} style={{ width: 32, height: 46 }} resizeMode={"contain"} />
                <Text style={{
                    marginLeft: 10,
                    color: "#F4F4F4",
                    fontFamily: "Exo-Bold",
                    fontSize: 24,
                }}>12</Text>
            </View>
        )
    }

    replayComponent = () => {
        return (
            <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={require('../../../../assets/images/watch/retry.png')} style={{ width: 108, height: 108 }} resizeMode={"contain"} />
                <Text style={{
                    color: "#F4F4F4",
                    fontFamily: "Exo-Bold",
                    fontSize: 24,
                    marginTop: 12
                }}>Replay</Text>
            </TouchableOpacity>
        )
    }

    passComponent = () => {
        return (
            <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={require('../../../../assets/images/watch/next.png')} style={{ width: 108, height: 108 }} resizeMode={"contain"} />
                <Text style={{
                    color: "#F4F4F4",
                    fontFamily: "Exo-Bold",
                    fontSize: 24,
                    marginTop: 12
                }}>Pass</Text>
            </TouchableOpacity>
        )
    }
    nextComponent = () => {
        return (
            <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={require('../../../../assets/images/watch/next.png')} style={{ width: 108, height: 108 }} resizeMode={"contain"} />
                <Text style={{
                    color: "#F4F4F4",
                    fontFamily: "Exo-Bold",
                    fontSize: 24,
                    marginTop: 12
                }}>Next</Text>
            </TouchableOpacity>
        )
    }

    bottomButtonText = (text: string) => {
        return (
            <Text style={{
                color: "#fff",
                fontFamily: "Exo-Medium",
                fontSize: 28,
                marginTop: 4
            }}> {text}</Text>
        )
    }


    correctAnswerComponentContainerRight = () => {

        if (this.state.isListening) {
            return this.scoreComponent();
        } else {
            if (this.state.didMatch === true) {
                return this.nextComponent();
            } else if (this.state.didMatch === false) {
                return this.replayComponent();
            }
            return this.scoreComponent();

        }
    }

    /*   wrongAnswerComponent = () => {
          return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('../../../../assets/images/watch/sorry.png')} style={{ width: 150, height: 150 }} />
                  {this.bottomButtonText("It didn't match!")}
              </View>
          )
      } */


    correctAnswerComponentContainerMid = () => {
        if (this.state.isListening) {
            return (
                < TouchableOpacity onPress={this.toggleListening} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../../../assets/images/watch/stop.png')} style={{ width: 150, height: 150 }} />
                    {this.bottomButtonText("Listening...")}
                </TouchableOpacity>);
        } else {
            if (this.state.didMatch === true) {
                return (
                    < View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../../../../assets/images/watch/ok.png')} style={{ width: 150, height: 150 }} />
                        {this.bottomButtonText("Correct!")}
                    </View>
                )
            } else if (this.state.didMatch === false) {
                return (
                    < TouchableOpacity onPress={this.toggleListening} style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../../../../assets/images/watch/sorry.png')} style={{ width: 150, height: 150 }} />
                        {this.bottomButtonText("It wasn't correct!")}
                    </TouchableOpacity>)
            }
            return (
                < TouchableOpacity onPress={this.toggleListening} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../../../assets/images/watch/speak.png')} style={{ width: 150, height: 150 }} />
                    {this.bottomButtonText("Press to talk")}

                </TouchableOpacity>)

        }
    }

    public render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ opacity: 0.8 }}
                    resizeMode='cover'
                    source={require('../../../../assets/images/watch/blur.jpg')}
                    blurRadius={10}
                />

                <View style={{ flex: 1, width: '100%', height: '100%', flexDirection: "row", position: "absolute", zIndex: 6 }}>
                    <View style={{ flex: 0.3333, justifyContent: "center", alignItems: "center" }}>
                        {
                            !this.state.isListening && this.state.didMatch === false ? this.passComponent() : this.wordComponent()
                        }
                    </View>
                    <View style={{ flex: 0.3333, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            {this.correctAnswerComponentContainerMid()}

                        </View>
                    </View>
                    <View style={{ flex: 0.3333, justifyContent: "center", alignItems: "center" }}>
                        {this.correctAnswerComponentContainerRight()}
                    </View>
                </View>

            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative"
    },
})