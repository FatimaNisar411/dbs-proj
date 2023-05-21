import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default function SummaryCircle({total})
{
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}> Sum Total </Text>
        <View style={styles.CircleShape} ><Text style={styles.sum} >{total}</Text>
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  
  },
  headerText: {
    fontSize: 20,
    color:'white',
    fontFamily:'monospace',
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }, 
  CircleShape: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF9800',
    justifyContent:'center',
    alignItems:'center'
  },
  sum:{
fontSize:32,
color:'white',
fontWeight:'bold',
  }

});