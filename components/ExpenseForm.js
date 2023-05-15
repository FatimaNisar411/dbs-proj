import React, { useContext, useEffect, useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/constant';
import { Text,View,StyleSheet, Alert
 } from 'react-native'
import Input from './Input'
import Button from './Button';
import { context } from '../store/context';
import { useNavigation } from '@react-navigation/native';
import format from '../functions/date';
import{editExpense, storeExpense} from '../functions/Database'
import LoadingScreen from './LoadingScreen';
import ErorrScreen from './ErorrScreen';
export default function ExpenseForm({isEditing,id,deleteExpense,title}) {

const[input,setInput]=useState({
amount:"",
date:format(new Date()),
title:title
});

const navigation=useNavigation();
const {addExpense,updateExpense,data}=useContext(context);
 useEffect(()=>{ 
  if(id)
{
 const defaultexpense=data.find((xpense)=>xpense.id==id);
 const defaultamount=defaultexpense.amount;
 const defaultdate=defaultexpense.date;

 const defaulttitle=defaultexpense.title;
 setInput({title:defaulttitle,id:id,amount:defaultamount.toString(),date:defaultdate})
} },[]);
const [issubmiting,setsubmiting]=useState(false);
const [error,seterror]=useState(null);
 const handleConfirm=async ()=>
 {

 const expense={
  title:input.title,
  date:input.date,
  amount:parseInt(input.amount)
 }
const isamtvalid=!isNaN(expense.amount)&&expense.amount>0
const isdatevalid=true;
const istitleValid=expense.title.trim().length>0;
if(!isamtvalid||!isdatevalid||!istitleValid)
{
Alert.alert("Invalid","Given input is invalid")
return ;  
}
setsubmiting(true)
try{
 if(isEditing)
 {
  expense.id=id;
 updateExpense(expense);
 await editExpense(id,expense);
 }
 else
 {

   const id=await storeExpense(expense);
  expense.id=id;
  console.log(expense);
  addExpense(expense);

 }
 setsubmiting(false)
 navigation.navigate("allExpense");
}

catch(err)
{
 setsubmiting(false);
seterror('could not connect to database');
}
 }
 function cancelEror()
{
seterror(null);
}
 function closeManageExpense()
 {

navigation.goBack();

 }
    const inputChangehandler=(changed,value)=>{
     setInput((old)=>{return {...old,[changed]:value}})

    }
    if(!issubmiting&&error)
    return<ErorrScreen message={error} onConfirm={cancelEror}/>
    if(issubmiting)
    return <LoadingScreen/>
  return (
    <View>
<Input lable='Title' config={{onChangeText:inputChangehandler.bind(this,'title'),autoCapitalize:'none',autoCorrect:false,value:input['title'], keyboardType:'default'} } />
<Input lable='date' config={{onChangeText:inputChangehandler.bind(this,'date'),value:input['date'],autoCapitalize:'none',autoCorrect:false, placeholder:'YYYY-MM-DD', keyboardType:'decimal-pad'} } />
<Input lable='amount' config={{onChangeText:inputChangehandler.bind(this,'amount'),value:input['amount'],autoCapitalize:'none',autoCorrect:false, keyboardType:'number-pad'} } />
<View style={style.optionsContainer}>
<Button onPress={closeManageExpense}>Cancel</Button>
<Button onPress={handleConfirm}>Confirm</Button>
{isEditing && <Button onPress={deleteExpense}><EvilIcons name="trash" size={24} color={GlobalStyles.colors.item}/></Button> }
    </View>
    </View>
  )
}
const style=StyleSheet.create({
  optionsContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:"space-evenly",
    alignItems:'center'
    }

})