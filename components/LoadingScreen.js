import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import {GlobalStyles} from '../constants/constant'

export default function LoadingScreen() {
    return (
        <View style={
            style.container
        }>
            <ActivityIndicator size='large' color='white'/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        backgroundColor: GlobalStyles.colors.back,
    }


})
