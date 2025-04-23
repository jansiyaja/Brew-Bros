import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';




const Category = () => {
 const categories = ["Coffee", "Tea", "Snacks", "Bakery", "Cold Drinks"];

  return (
   <View style={styles.categoryContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.categoryTab, 
              index === 0 && styles.activeTab
            ]}
          >
            <Text style={[
              styles.categoryText,
              index === 0 && styles.activeText
            ]}>
              {category}
            </Text>
            {index === 0 && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
    categoryContainer: {
    backgroundColor:'#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 4,
    position: 'relative',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomColor: '#FF9E67',
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 15,
    color: '#4A4A4A',
  },
  activeText: {
    color: '#000',
    fontWeight: '500',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '90%',
     backgroundColor: '#FF8C3E',
  },
});