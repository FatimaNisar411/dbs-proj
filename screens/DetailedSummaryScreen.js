import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import {GlobalStyles} from '../constants/constant'
import { LineChart,BarChart, } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import BodyDashBoard from '../components/BodyDashBoard';
import { ScrollView } from 'react-native-gesture-handler';
export default function DetailedSummaryScreen({navigation,route}) {
  
  const  expenses=route.params.expenses;
  const screenWidth = Dimensions.get("window").width;
  const amountarray=expenses.map((item)=>item.amount);
  console.log(amountarray)
  const totalexpene=0;
  const sumofexpense=0;
  const maximumexpense=0;
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
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
