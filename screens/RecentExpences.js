import React, { useContext, useEffect, useState } from 'react'
import { View,StyleSheet,Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'
import {context} from '../store/context'
import gerecent from '../functions/getrecent'
import { fetchExpsne } from '../functions/Database'
import LoadingScreen from '../components/LoadingScreen'
import ErorrScreen from '../components/ErorrScreen'
import { GlobalStyles } from '../constants/constant'
export  default   function  RecentExpences() {
const {data,setExpense}=useContext(context);
const [isFetching,setFetching]=useState(true);
const  [tempdata,setdata]=useState([]);
useEffect(()=>{
async function getExpnse()
{
  setFetching(true);
  try{

 const expeseraw=await  fetchExpsne();
 const expese=expeseraw.rows._array;
 setExpense(expese);
  }
  catch(err)
  {
 console.log(err);
  }

 setFetching(false);
}
getExpnse();

},[])

//   const recent=data.filter((expense)=>{
// const today=new Date();
// const datebefore7=gerecent(today,7);
// return expense.date>datebefore7;
//   });
const recent=data;

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