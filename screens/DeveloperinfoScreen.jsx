import React from 'react'
import { StyleSheet,View,Text} from 'react-native'
import { GlobalStyles } from '../constants/constant'
export default function DeveloperinfoScreen() {
  
  return (
  <>
  <View style={styles.container}>
<Text style={styles.title}>Developed By :</Text>
<Text style={styles.text}>SHABARISH K :</Text>

  </View>
  
  
  
  
  
  </>
  )
}
const styles=StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:GlobalStyles.colors.back,

},
title:{fontFamily:'monospace',
fontWeight:'bold',
color:GlobalStyles.colors.item,
},
text:{
  fontWeight:'300',
  color:'white'
}

})