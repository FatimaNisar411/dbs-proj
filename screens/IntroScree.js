import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import video from '../assets/intro.mp4'
import { useNavigation } from '@react-navigation/native';
import { View,StyleSheet } from 'react-native';

export default function IntroScree() {
    
    const navigation=useNavigation();
    navigation.setOptions({headerShown:false})
    setTimeout(() => {
    navigation.navigate("overView")
    },30000);
    const [status, setStatus] = React.useState({});
  return (
    <View style={style.container}>
         <Video
       style={{backgroundColor:'white',width:'100%',height:'100%'}}
        source={require('../assets/intro.mp4')}
        resizeMode={ResizeMode.COVER}
        isLooping={false}
        isMuted={false}
        shouldPlay={true}
      
      />
        </View>
    ) 
}
const style=StyleSheet.create({
container:{flex:1,
backgroundColor:'black'}
})