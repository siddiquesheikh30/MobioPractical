/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import ProductList from './assets/screens/ProductList';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    
    <ProductList />
    
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
