import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import PromoBanner from './PromoBanner';
import { Link } from 'expo-router';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffa94d" style="dark" />

      <View style={styles.headerRow}>
        
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#4b1e00" />
        </TouchableOpacity>

        <View style={styles.title}>
         <Link href="/about">
            <Text style={styles.cafeName}>Brew Bros Café</Text>
            </Link>
          <Text style={styles.location}>Bandra</Text>
        </View>

      
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <PromoBanner
        image={require('../../assets/images/cat.png')}
        text="Want it strong? Try the Turkish brew 🐱"
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffa94d',

    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    alignItems: 'center',
  },
  cafeName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4b1e00',
  },
  location: {
    fontSize: 16,
    color: '#6b4e2d',
  },
});
