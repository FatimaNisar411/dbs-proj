import React from 'react'
import {View, Text} from 'react-native'
import {TextInput, StyleSheet} from 'react-native'
import {GlobalStyles} from '../constants/constant'

export default function Input({lable, config}) {
    return (
        <View style={
            style.container
        }>
            <Text style={
                style.lable
            }>
                {lable}</Text>
            <TextInput style={
                    style.input
                }
                {...config}></TextInput>

        </View>
    )
}
const style = StyleSheet.create({
    container: {
        margin: 12,
        flex: 1
    },
    lable: {
        fontSize: 20,
        color: GlobalStyles.colors.primary100
    },
    input: {
        backgroundColor: GlobalStyles.colors.item,
        padding: 6,
        borderRadius: 5,
        fontSize: 29,
        color: 'white',
        textAlign: 'center'
    }


})
