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
  //code to find the maximun expenditure
  var maxexpnese=expenses[0];
  for(var exp in expenses )
  if(exp.amount>maxexpnese.amount)
  maxexpnese=exp;
  return (
    <ScrollView horizontal={false} style={{backgroundColor:GlobalStyles.colors.back,flex:1,}}>
    <View style={style.container}>
      <View style={style.head} ><SummaryCircle total={totalexpene}/></View>
  
   {/* <View style={style.body}><BodyDashBoard /></View> */}


   {/* add a view to show the maxmium anount spend and its details */}
   <View style={style.details}>
    <Text style={style.detailtext}>Most Amount Spend :{maxexpnese.amount}</Text>
    <Text style={style.detailtext}>Date :{maxexpnese.date}</Text>
    <Text style={style.detailtext}></Text>
   </View>
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
details:{
padding:10,
borderRadius:7,
backgroundColor:'#FF9800',
gap:20,

justifyContent:'center',
alignItems:'center',
},
detailtext:{
  fontWeight:'bold',
  color:'white',
  fontSize:25,
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

