import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import {GlobalStyles} from '../constants/constant'
import BodyDashBoard from '../components/BodyDashBoard';
import { ScrollView } from 'react-native-gesture-handler';
export default function DetailedSummaryScreen({navigation,route}) {
  
  const  expenses=route.params.expenses;
  const amountarray=expenses.map((item)=>item.amount);
  const totalexpene=amountarray.reduce((sum,item)=> sum+item);
  console.log(totalexpene);
  const sumofexpense=0;
  const maximumexpense=0;
  
  return (
    <ScrollView horizontal={false} style={{backgroundColor:GlobalStyles.colors.back,flex:1,}}>
    <View style={style.container}>
   <View style={style.body}><BodyDashBoard/></View>
    </View>
    </ScrollView>
  )
}
const style=StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:20,
backgroundColor:GlobalStyles.colors.back,
gap:20,
},
body:{
flex:1,
width:'100%',
borderRadius:7,
justifyContent:'center',
alignItems:'center',
backgroundColor:GlobalStyles.colors.back,
},



})
