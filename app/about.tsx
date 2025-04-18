import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  StatusBar, 
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

const CafeProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
   
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Café Profile</Text>
        <View style={styles.emptySpace} />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
       
        <View style={styles.cafeNameContainer}>
          <Text style={styles.cafeName}>Brewed Awakenings</Text>
        </View>
        
    
        <View style={styles.cafeImageContainer}>
          <Image 
            source={require('../assets/images/cafe.jpeg')} 
            style={styles.cafeImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.menuOrderContainer}>
          <Text style={styles.menuText}>Menu</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        
        
        <View style={styles.utilitiesContainer}>
          <View style={styles.amenityItem}>
            <Ionicons name="wifi" size={20} color="#777" />
            <Text style={styles.amenityText}>Free Wi-Fi</Text>
          </View>
          
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="volume-off" size={20} color="#777" />
            <Text style={styles.amenityText}>Quiet Zone</Text>
          </View>
          
          <View style={styles.amenityItem}>
            <FontAwesome5 name="charging-station" size={20} color="#777" />
            <Text style={styles.amenityText}>CC</Text>
          </View>
        </View>
        
       
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Book a Table</Text>
          <View style={styles.bookingDetails}>
            <View style={styles.dateContainer}>
              <Ionicons name="calendar-outline" size={20} color="#777" />
              <Text style={styles.bookingText}>Thu, Apr 25</Text>
            </View>
            <Text style={styles.bookingText}>Table for 2 at 4:30 PM</Text>
          </View>
        </View>
        
    
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Café Vibe</Text>
          <View style={styles.vibeContainer}>
            <View style={styles.vibeColumn}>
              <View style={styles.vibeItem}>
                <Text style={styles.vibeLabel}>Music playing</Text>
                <Text style={styles.vibeValue}>Acoustic Chill</Text>
              </View>
              <View style={styles.vibeItem}>
                <Text style={styles.vibeLabel}>Today's special</Text>
                <Text style={styles.vibeValue}>Avocado Toast</Text>
              </View>
              <View style={styles.vibeItem}>
                <Text style={styles.vibeLabel}>Noise level</Text>
                <Text style={styles.vibeValue}>Moderate</Text>
              </View>
            </View>
            
            <View style={styles.vibeMessageContainer}>
              <Image
                source={require('../assets/images/cat.png')}
                style={styles.catIcon}
              />
              <View style={styles.messageBox}>
                <Text style={styles.messageText}>
                  The perfect spot for a cozy conversation!
                </Text>
              </View>
            </View>
          </View>
        </View>
        
 
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hop Crowd</Text>
          <Text style={styles.crowdText}>12 Hoppers Present</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CafeProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#F9F5EA',
    
  },
    header: {
      margin:12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backButton: {
    padding: 5,
  },
    headerTitle: {
      margin:5,
    fontSize: 20,
    fontWeight: '600',
  },
  emptySpace: {
    width: 24,
  },
  cafeNameContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  cafeName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
      marginLeft: 10,
      fontFamily: 'SpaceMono-Regular',
  },
  cafeImageContainer: {
    width: '100%',
    height: 180,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cafeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  menuOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#FF9F5F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  orderButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  utilitiesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  amenityText: {
    marginLeft: 6,
    color: '#444',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingText: {
    fontSize: 15,
    marginLeft: 5,
    color: '#444',
  },
  vibeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vibeColumn: {
    flex: 1,
  },
  vibeItem: {
    marginBottom: 8,
  },
  vibeLabel: {
    fontSize: 13,
    color: '#777',
  },
  vibeValue: {
    fontSize: 15,
    color: '#333',
  },
  vibeMessageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  catIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  messageBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    flex: 1,
  },
  messageText: {
    fontSize: 13,
  },
  crowdText: {
    fontSize: 15,
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    width: '60%',
    height: '100%',
    backgroundColor: '#FF9F5F',
  },
});