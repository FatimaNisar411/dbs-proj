import {useState,useEffect,React} from 'react'
import {FlatList, Text, StyleSheet,View} from 'react-native'
import Expenseitem from '../components/expenses/Expenseitem';
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {GlobalStyles} from '../constants/constant'
import { getMardked } from '../functions/MarkedExpensehttps'
import ExpenseitemMarked from '../components/expenses/ExpenseitemMarked';
import { fetchExpsnetaged } from '../functions/Database';
export default function GoodExpensesScreen({navigation}) {
    const handlerender = (item) => {
        return <ExpenseitemMarked {...item.item}/>

    }
   
   const [marked,setmarked]=useState([]);

   useEffect(()=>{
navigation.addListener('focus',async ()=>{const data=await fetchExpsnetaged();
    const filterd=data.filter((item)=>item.tag=='GOOD')
   setmarked(filterd);}) },[])

    return (
        <View style={style.markedbackground}>
        <FlatList data={marked} contentContainerStyle={{paddingBottom:56}}
        showsVerticalScrollIndicator={false}
            renderItem={handlerender}
            key={
                (item) => item.item.id
        }></FlatList></View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 32,
        backgroundColor: GlobalStyles.colors.back
    }, markedbackground:{
        flex:1,
        backgroundColor:GlobalStyles.colors.back,
        padding:23
   
       }
})
