import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export interface SubtitleProps {
    subtitle: string
}

export interface SubtitleState {
}

export default class Subtitle extends React.Component<SubtitleProps, SubtitleState> {
    public static defaultProps = {
    };
    constructor(props: SubtitleProps) {
        super(props);
        this.state = {
        };
    }



    public render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#5E5E5E', width: '100%', height: 45, zIndex: 1, opacity: 0.6, borderRadius: 6 }} />


                <View style={{ position: "absolute", zIndex: 2 }}>
                    <Text style={{
                        color: "white",
                        fontFamily: "Exo-Bold",
                        fontSize: 18,
                    }}>{this.props.subtitle}</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: "94%",
        height: 45,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative"
    },
})