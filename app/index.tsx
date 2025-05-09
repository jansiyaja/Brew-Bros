import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import Header from '@/components/Cafe/Header';
import PromoBanner from '@/components/Cafe/PromoBanner';
import Category from '@/components/Cafe/Category';
import { ProductRow, SecondProductRow } from '@/components/Cafe/ProductCard';
import ViewOrderButton from '@/components/Cafe/ViewOrderButton';


export default function BrewBrosCafe() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor="#FFAE78" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollcontainer}>

        <Category/>
        <View style={styles.productsContainer}>
          <ProductRow />
          <PromoBanner 
            image={require('../assets/images/cat.png')} 
            text="Add a dessert and earn 10 Hop Coins!" 
          />
          <SecondProductRow />

           
        </View>
      </ScrollView>
           <ViewOrderButton/>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: '#FFAE78'
  },

  productsContainer: {
    padding: 10,
    backgroundColor: '#fff',
      
  },

  
});