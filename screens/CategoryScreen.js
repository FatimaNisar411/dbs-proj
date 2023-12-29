// CategoryScreen.js

import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryGrid from '../components/categorygrid';
import { fetchCategories } from '../components/api'; // Ensure correct path to your API file

function CategoryScreen({ navigation }) {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      fetchCategoriesFromApi(); // Fetch categories on component mount
    }, []);
  
    const fetchCategoriesFromApi = () => {
      fetchCategories()
        .then(data => {
          setCategories(data);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    };
  
    const handleCategoryPress = (title) => {
      console.log('Category pressed in CategoryScreen:', title);
      navigation.navigate('manageExpense', { title });
    };
  
    return (
      <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryGrid
            category={item}
            onPressCategory={handleCategoryPress}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});
