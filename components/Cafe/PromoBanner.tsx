import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type PromoBannerProps = {
  image: ImageSourcePropType;
  text: string;
};

const PromoBanner: React.FC<PromoBannerProps> = ({ image, text }) => {
  return (
      <View style={styles.banner}>
          
      <Image source={image} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default PromoBanner;

const styles = StyleSheet.create({
  banner: {
   backgroundColor: '#FFE8D6',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
  },
icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  text: {
      flex: 1,
    fontSize: 20,
    color: '#4b1e00',
    
  },
});
