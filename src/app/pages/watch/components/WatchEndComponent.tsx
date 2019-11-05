import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
 import { PassComponent, wordComponent, bottomButtonText, NextComponent, ReplayComponent, scoreComponent } from './WatchStaticSubcomponents';
export interface WatchEndProps {
}

export interface WatchEndState {
    isListening: boolean;
    didMatch: boolean;
}

export default class WatchEnd extends React.Component<WatchEndProps, WatchEndState> {
    public static defaultProps = {
    };
    constructor(props: WatchEndProps) {
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
                return (<NextComponent/>)
            } else if (this.state.didMatch === false) {
                return (<ReplayComponent />)
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
                    < View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../../../../assets/images/watch/sorry.png')} style={{ width: 150, height: 150 }} />
                        {bottomButtonText("It wasn't correct!")}
                    </View>)
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
                            !this.state.isListening && this.state.didMatch === false ? (<PassComponent/>) : wordComponent()
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