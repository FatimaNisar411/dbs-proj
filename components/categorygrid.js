import React, { useEffect, useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { fetchCategories } from './api';


export default function CategoryGrid() {
    const [categories, setCategories] = useState([]);
  
    // Fetch categories on component mount
    useEffect(() => {
        fetchCategories()
        .then(data => {
          setCategories(data);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }, []);
  
    // Function to handle category press
    const handleCategoryPress = (title) => {
        console.log('Category pressed:', title);
        onPressCategory(title); // Pass the category title to the parent component
      };
    
      return (
        <View>
          {categories.map(category => (
            <View key={category.id} style={[styles.griditem, { backgroundColor: category.color }]}>
              <Pressable
                onPress={() => handleCategoryPress(category.title)}
                android_ripple={{ color: 'white' }}
                style={styles.button}
              >
                <View style={styles.innergriditem}>
                  <Text>{category.title}</Text>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      );
    }
  // Styles remain the same
  

const styles = StyleSheet.create({
  griditem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    elevation: 9,
    marginBottom: 22,
    overflow: 'hidden'
  },
  innergriditem: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  button: {
    flex: 1
  }
});
