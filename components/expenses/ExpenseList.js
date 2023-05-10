import React from 'react'
import {FlatList, Text, StyleSheet} from 'react-native'
import Expenseitem from './Expenseitem'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {GlobalStyles} from '../../constants/constant'

export default function ExpenseList({expenses}) {
    const handlerender = (item) => {
        return <Expenseitem {...item.item}/>

    }
    return (
        <FlatList data={expenses} contentContainerStyle={{paddingBottom:56}}
        showsVerticalScrollIndicator={false}
            renderItem={handlerender}
            key={
                (item) => item.item.id
        }></FlatList>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 32,
        backgroundColor: GlobalStyles.colors.back
    }
})
