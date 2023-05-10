import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {GlobalStyles} from '../../constants/constant';
import DetailedSummaryScreen from '../../screens/DetailedSummaryScreen';
import { useNavigation } from '@react-navigation/native';
export default function ExpenseSummary({period, expenses}) {
    var totalamount = 0;
    for (let e of expenses) {
        totalamount += e.amount;
    }
    const navigation=useNavigation();
    const handleSummaryPress=()=>{
          navigation.navigate("DetailedSummary",{expenses:expenses});
    }
    return (
        <Pressable onPress={handleSummaryPress}>
        <View style={
            style.container
        }>
            <Text style={
                style.peroid
            }>
                {period}</Text>
            <Text style={
                style.sum
            }><FontAwesome name="rupee" 
                    size={20}
                    color='white'/> {totalamount}</Text>
        </View>
        </Pressable>
    )
}
const style = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: GlobalStyles.colors.summary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom:50,
        minHeight:90

    },
    sum: {

        fontSize: 16,
        color:'white',
        fontWeight: 'bold',
       

    },
    peroid: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'


    }


})
