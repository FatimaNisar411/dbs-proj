import React from 'react'
import {Pressable, View, StyleSheet, Text} from 'react-native'
import {GlobalStyles} from '../../constants/constant'
import {FontAwesome} from '@expo/vector-icons';
import format from '../../functions/date';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import { setMarked } from '../../functions/MarkedExpensehttps';
export default function ExpenseitemMarked({id, title, date, amount,dontShow}) {
    const navigation = useNavigation();

    return <View style={style.totalwrapper}>
        <Pressable >
            <View style={
                style.container
            }>
                <View>
                    <Text style={
                        style.title
                    }>
                        {title}</Text>
                    <Text style={
                        style.date
                    }>
                        {
                        format(date)
                    }</Text>
                </View>
                <View style={
                    style.amontcontiner
                }>
                    <Text style={
                        style.amount
                    }><FontAwesome name="rupee"
                            size={14}
                            color={
                                GlobalStyles.colors.primary50
                            }/> {
                        amount.toFixed(2)
                    }</Text>
                </View>
            </View>

        </Pressable>
     
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        marginVertical: 10,
        backgroundColor: GlobalStyles.colors.item,
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 6,
        justifyContent: 'space-between',
        minHeight: 100,
       
    },
    totalwrapper:{
        marginBottom:50,

    },
    decide: {
        flex: 1,
        flexDirection: 'row'


    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',

        color: GlobalStyles.colors.primary50
    },
    amontcontiner: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        minWidth: 100,
        height: 50
    },
    date: {

        color: GlobalStyles.colors.primary50
    },

    amount: {
        color: GlobalStyles.colors.primary50,
        fontWeight: 'bold'

    }
})
