import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ProductCardProps = {
  image: ImageSourcePropType;
    title: string;
    price: string;
    tag: string;
  isSpecial?: boolean;

};



const ProductCard = ({ image, title, price, tag, isSpecial }:ProductCardProps) => {
  return (
    <View style={styles.productCard}>
      <Image source={image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.productDetails}>
          {isSpecial && (
            <View style={styles.specialTag}>
              <Text style={styles.specialText}>HOP SPECIAL</Text>
            </View>
          )}
          {tag && <Text style={styles.tagText}>{tag}</Text>}
        </View>
        <View style={styles.priceAddContainer}>
          <Text style={styles.productPrice}>{price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



export default ProductCard;

const styles = StyleSheet.create({
 productCard: {
        width: '48%',
    
  },
    productImage: {
      
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 5,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  specialTag: {
    backgroundColor: '#FF9E67',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginRight: 8,
  },
  specialText: {
    fontSize: 10,
    color: 'white',
    fontWeight: '500',
  },
  tagText: {
    fontSize: 12,
    color: 'green',
  },
  priceAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    },
    addButton: {
    backgroundColor: '#FFE8D6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addButtonText: {
    fontSize: 12,
    color: '#000',
    },
    productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
    secondproductRow: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});




 export const ProductRow = () => {
  return (
    <View style={styles.productRow}>
      <ProductCard 
        image={require('../../assets/images/cappuccino.jpeg')}
        title="Almond Cappuccino"
        price="₹180"
        tag="Vegan"
        isSpecial={false}
      />
      <ProductCard 
        image={require('../../assets/images/turkish_brew.jpeg')}
        title="Turkish Brew"
        tag="Vegan"
        price="₹140"
        isSpecial={true}
      />
    </View>
  );
};


 export const SecondProductRow = () => {
  return (
    <View style={styles.secondproductRow}>
      <ProductCard 
        image={require('../../assets/images/iced_latte.jpeg')}
        title="Chocolate Croissant"
        price="₹100"
         tag="Vegan"
        isSpecial={false}
      />
      <ProductCard 
        image={require('../../assets/images/croissant.jpeg')}
        title="Iced Latte"
        price="₹140"
        tag="Vegan"
        isSpecial={false}
      />
    </View>
  );
};