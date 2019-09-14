import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Player from '../schema/Player';
import { passComponent, wordComponent, bottomButtonText, nextComponent, replayComponent, scoreComponent } from './WatchStaticSubcomponents';
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

    correctAnswerComponentContainerRight = () => {

        if (this.state.isListening) {
            return scoreComponent();
        } else {
            if (this.state.didMatch === true) {
                return nextComponent();
            } else if (this.state.didMatch === false) {
                return replayComponent();
            }
            return scoreComponent();

        }
    }


    correctAnswerComponentContainerMid = () => {
        if (this.state.isListening) {
            return (
                < TouchableOpacity onPress={this.toggleListening} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../../../assets/images/watch/stop.png')} style={{ width: 150, height: 150 }} />
                    {bottomButtonText("Listening...")}
                </TouchableOpacity>);
        } else {
            if (this.state.didMatch === true) {
                return (
                    < View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../../../../assets/images/watch/ok.png')} style={{ width: 150, height: 150 }} />
                        {bottomButtonText("Correct!")}
                    </View>
                )
            } else if (this.state.didMatch === false) {
                return (
                    < TouchableOpacity onPress={this.toggleListening} style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../../../../assets/images/watch/sorry.png')} style={{ width: 150, height: 150 }} />
                        {bottomButtonText("It wasn't correct!")}
                    </TouchableOpacity>)
            }
            return (
                < TouchableOpacity onPress={this.toggleListening} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../../../assets/images/watch/speak.png')} style={{ width: 150, height: 150 }} />
                    {bottomButtonText("Press to talk")}

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
                            !this.state.isListening && this.state.didMatch === false ? passComponent() : wordComponent()
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