import React, { useContext } from 'react'
import {View, Text ,StyleSheet} from 'react-native'
import ExpenseSummary from './expenses/ExpenseSummary'
import ExpenseList from './expenses/ExpenseList'
import { GlobalStyles } from '../constants/constant'
import context from '../store/context'
import StoreWrapper from '../store/context'
export default function ExpensesOutput({ period,expenses}) {
    const fallback=<Text style={style.fallback}>Nothing to Display</Text>
    if(expenses!=undefined&&expenses.length>0)
   var  content=  <View>
    <ExpenseList expenses={expenses}/>
</View>
else content=fallback;
    return (
      
       <>
        <View style={style.container}>
            <ExpenseSummary period={period}
                expenses={expenses}/>
          {content}
        </View>
        </>
    )
}
 const style=StyleSheet.create({
container:{
    flex:1,
    padding:23,
    backgroundColor:GlobalStyles.colors.back,
    marginBottom:0


},
fallback:{
color:'white',
padding:8,
fontSize:17,
textAlign:'center',
marginTop:100

}


 })