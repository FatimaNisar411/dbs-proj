import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpences from './screens/AllExpences';
import RecentExpences from './screens/RecentExpences';
import ManageExpences from './screens/ManageExpences';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { GlobalStyles } from './constants/constant';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import StoreWrapper from './store/context';
import IntroScree from './screens/IntroScree';
import CategoryScreen from './screens/CategoryScreen';
import GoodExpensesScreen from './screens/GoodExpensesScreen';
import BadExpenses from  './screens/BadExpensesScreen';
import DetailedSummaryScreen from './screens/DetailedSummaryScreen';
import { useEffect, useState } from 'react';
import { init } from './functions/Database';
// import ErorrScreen from './components/ErorrScreen';
import LoadingScreen from './components/LoadingScreen';
// import DeveloperinfoScreen from './screens/DeveloperinfoScreen';

export default function App() {
  const [initdb,setintidb]=useState(false);
useEffect(()=>{
  async function setdb(){
 await init().then((result)=>setintidb(true)).catch(err=>console.log(err));
  }
 setdb();
 
},[])


  const stack=createStackNavigator();
 const bottomtab=createBottomTabNavigator();
 function ExpenceOverView()
 {
  const navigation=useNavigation();
  const handleAddPress=()=>{
    //got to category screen and
navigation.navigate("category");
  }
  const handleInfoPress=()=>{
navigation.navigate("info");

  }
  if(!initdb)
  return <LoadingScreen/>
  return <bottomtab.Navigator screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.item},
    headerTintColor:'white',
    headerRight:()=>
          <View style={{display:'flex',flexDirection:'row'}}>
        <Pressable onPress={handleAddPress}>
<Entypo name="add-to-list" size={26} color="white" style={{marginRight:20}} />
      </Pressable>
      <Pressable onPress={handleInfoPress} android_ripple={true}>
      <Ionicons name="information-circle-sharp" size={24} color="white" style={{display:'flex',marginRight:10}} />
      </Pressable>
       </View>
,
    tabBarStyle:{backgroundColor:'black'},
    tabBarActiveTintColor:GlobalStyles.colors.item,

  }}>
  <bottomtab.Screen options={{title:'Recent',tabBarLabel
:"Recent",tabBarIcon:({color,size})=>{
  return <Ionicons name="timer-outline"  size={24} color="white" />
}
}} component={RecentExpences} name="Recent"/>
     <bottomtab.Screen options={{title:'AllExpenses',tabBarLabel
:"All",tabBarIcon:({color,size})=>{
  return <Ionicons name="calendar" size={24} color="white" />
}
}} component={AllExpences} name="allExpense"/>

<bottomtab.Screen options={{title:'Good Expenses',tabBarLabel
:"Good",tabBarIcon:({color,size})=>{
  return <Entypo name="emoji-happy" size={24} color="white" />
}
}} component={GoodExpensesScreen} name="good"/>
 <bottomtab.Screen options={{title:'Bad Expenses',tabBarLabel
:"Bad",tabBarIcon:({color,size})=>{
  return <Entypo name="emoji-sad" size={24} color="white" />
}
}} component={BadExpenses} name="bad"/>

  </bottomtab.Navigator>
 }
//  if(!dbok)
//  return <Text>db not ok</Text>
  return (
    <>
    <StoreWrapper >
     <StatusBar style="light" />
     <NavigationContainer>
    <stack.Navigator screenOptions={{backgroundColor:GlobalStyles.colors.item}}>
      <stack.Screen  options={{headerShown:false,}}  component={IntroScree} name='intro' />
    <stack.Screen options={{headerShown:false}}  component={ExpenceOverView} name='overView' />
    {/* <stack.Screen options={{headerShown:true,headerStyle:{backgroundColor:GlobalStyles.colors.back}}}  component={DeveloperinfoScreen} name='info' /> */}
    <stack.Screen options={{title:'Summary',headerTintColor:'white', headerShown:true, headerStyle:{backgroundColor:GlobalStyles.colors.back},headerTintColor:'white'}} component={DetailedSummaryScreen}  name='DetailedSummary' />
    <stack.Screen  component={CategoryScreen} name="category" />
     <stack.Screen component={ManageExpences} name="manageExpense"
     options={{headerTintColor:'white',
     presentation:'modal',
     headerStyle:{backgroundColor:GlobalStyles.colors.item},
  }
    }  />
 
      </stack.Navigator>
      </NavigationContainer>
      </StoreWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
