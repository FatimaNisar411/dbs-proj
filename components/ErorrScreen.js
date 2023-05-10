import React from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Button,
    Text
} from 'react-native'
import {GlobalStyles} from '../constants/constant'

export default function ErorrScreen({message, onConfirm}) {
    return (
        <View style={
            style.container
        }>
            <Text style={
                style.text
            }>
                Something went   wrong ....</Text>
            <Text>{message}</Text>
            <Button onPress={onConfirm}
                title='OK'></Button>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        backgroundColor: GlobalStyles.colors.error50
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
