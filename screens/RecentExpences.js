import React, { useContext, useEffect, useState } from 'react'
import { View,StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'
import {context} from '../store/context'
import gerecent from '../functions/getrecent'
import { fetchExpsne } from '../functions/http'
import LoadingScreen from '../components/LoadingScreen'
import ErorrScreen from '../components/ErorrScreen'
import { GlobalStyles } from '../constants/constant'
export default function RecentExpences() {
const {data,setExpense}=useContext(context);
const [isFetching,setFetching]=useState(true);
const [error,seterror]=useState(false);
useEffect(()=>{
async function getExpnse()
{
  setFetching(true);
  try{
 const expese =await fetchExpsne();
 setExpense(expese);
  }
  catch(err)
  {
    seterror('check your internet connection ! ')
  }

 setFetching(false);
}
getExpnse();

},[])

  const recent=data.filter((expense)=>{
const today=new Date();
const datebefore7=gerecent(today,7);
return expense.date>datebefore7;
  });
const cancelEror=()=>{
  seterror(null);
}
  if(error&&!isFetching)
  return<ErorrScreen message={error} onConfirm={cancelEror}/>
  if(isFetching)
  return <LoadingScreen/>
  return (
   
    <View style={style.container}>
        <ExpensesOutput  period={'last 7 days'} expenses={recent}/>
    </View>
  )
}
const style=StyleSheet.create({
container:
{
flex:1,
backgroundColor:GlobalStyles.colors.back,
}
})