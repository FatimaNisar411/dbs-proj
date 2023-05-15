import React from 'react'

import {Pressable, View, Text, StyleSheet} from 'react-native'

export default function categorygrid(props) {
    return (
        <View style={
            [
                style.griditem, {
                    backgroundColor: props.color
                },
            ]
        }>
            <Pressable onPress={
                    props.onPress
                }
                android_ripple={
                    {color: 'white'}
                }
                style={
                    style.button
            }>
                <View style={
                    style.innergriditem
                }>
                    <Text>{
                        props.title
                    }</Text>
                </View>
            </Pressable>
        </View>
    )
}
const style = StyleSheet.create({
    griditem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        elevation: 9,
        marginBottom:22,
        overflow: 'hidden'
    },
    innergriditem: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    button: {
        flex: 1


    }

})
