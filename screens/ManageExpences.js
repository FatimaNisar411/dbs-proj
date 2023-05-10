import React, { useContext, useLayoutEffect, useState } from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/constant';

import { useNavigation } from '@react-navigation/native';
import { context } from '../store/context';
import ExpenseForm from '../components/ExpenseForm';
import { ScrollView } from 'react-native-gesture-handler';
import { deletefireExpense } from '../functions/http';
import ErorrScreen from '../components/ErorrScreen';
export default function ManageExpences({route}) {
  const {removeExpense,addExpense,updateExpense}=useContext(context);
  const navigation=useNavigation();
const  id=route.params?.id;
const [error,seterror]=useState(null);
var  titlegiven=route.params.title;
if (!titlegiven)
{
titlegiven='';

}
const isEditing=!!id;
useLayoutEffect(()=>{navigation.setOptions({
  title:isEditing?'edit':'Add Expense',backgroundColor:GlobalStyles.colors.item
  
  })},[isEditing])
const closeManageExpense=()=>
{

  navigation.goBack();
}
const deleteExpense=async()=>{
try{

await deletefireExpense(id);
removeExpense(id);
  navigation.goBack();
}
catch (err)
{
  seterror(true)
seterror("could not delete");
}
  
}
const cancelEror=()=>{
  seterror(null);
}
  if(error)
  return<ErorrScreen message={error} onConfirm={cancelEror}/>
  return (
    
   <View style={style.container}>
    <ScrollView style={{flex:1}}>
      {/* {isEditing&&
    <View style={style.deleteContainer}>
    <Button onPress={deleteExpense}><EvilIcons name="trash" size={24} color={GlobalStyles.colors.error500}/></Button> 
    </View> } */}
    <View>
   
<ExpenseForm isEditing={isEditing} id={id} title={titlegiven} deleteExpense={deleteExpense}></ExpenseForm>

    </View>
 
    </ScrollView>
    </View>
   
  )
}
const style=StyleSheet.create({
  container:
  {flex:1,
  padding:24,
backgroundColor:GlobalStyles.colors.back},
deleteContainer:{
  marginTop:20,
  padding:15,
  backgroundColor:GlobalStyles.colors.primary50,
  elevation:6,
  alignItems:'center',
  borderRadius:5,
},
optionsContainer:{
flexDirection:'row',
flex:1,
justifyContent:"space-evenly",
alignItems:'center'
}
})