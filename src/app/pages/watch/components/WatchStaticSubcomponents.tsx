import { View, Image, Text, TouchableOpacity } from "react-native"

import * as React from 'react';


export const wordComponent = () => {
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


export const scoreComponent = () => {
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

export const replayComponent = () => {
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

export const passComponent = () => {
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
export const nextComponent = () => {
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

export const bottomButtonText = (text: string) => {
    return (
        <Text style={{
            color: "#fff",
            fontFamily: "Exo-Medium",
            fontSize: 28,
            marginTop: 4
        }}> {text}</Text>
    )
}



