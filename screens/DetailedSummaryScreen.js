import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import {GlobalStyles} from '../constants/constant'
import BodyDashBoard from '../components/BodyDashBoard';
import { ScrollView } from 'react-native-gesture-handler';
import SummaryCircle from '../components/SummaryCircle';
export default function DetailedSummaryScreen({navigation,route}) {
  const  expenses=route.params.expenses;
  const amountarray=expenses.map((item)=>item.amount);
  const totalexpene=amountarray.reduce((sum,item)=> sum+item);
  return (
    <ScrollView horizontal={false} style={{backgroundColor:GlobalStyles.colors.back,flex:1,}}>
    <View style={style.container}>
      <View style={style.head} ><SummaryCircle total={totalexpene}/></View>
   <View style={style.body}><BodyDashBoard /></View>
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
head:{

  borderRadius:7,
  height:250,
  width:250,
}
})

