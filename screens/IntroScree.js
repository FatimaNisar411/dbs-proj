import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
export default function IntroScree({navigation}) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("overView");
    }, 4000);
  }, []);
  return (
    <AnimatedLoader
      visible={visible} 
      source={require('../constants/97930-loading.json')}
      overlayColor="rgb(255, 192, 0)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text style={styles.text}>We Are Setting Everything For You ...</Text>
    </AnimatedLoader>
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
   
  },
  text:{
fontSize:20,
fontFamily:'monospace',
fontWeight:'bold'

  }
});