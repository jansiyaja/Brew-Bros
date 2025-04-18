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
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const CafeProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Café Profile</Text>
        <View style={styles.emptySpace} />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cafe Name */}
        <View style={styles.cafeNameContainer}>
          <Text style={styles.cafeName}>Brewed Awakenings</Text>
        </View>
        
        {/* Cafe Image */}
        <View style={styles.cafeImageContainer}>
          <Image 
            source={require('../assets/images/cafe.jpeg')} 
            style={styles.cafeImage}
            resizeMode="cover"
          />
        </View>

        {/* Menu and Order Button */}
        <View style={styles.menuOrderContainer}>
          <Text style={styles.menuText}>Menu</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        
        {/* Utilities */}
        <View style={styles.utilitiesContainer}>
          <View style={styles.utilitiesItem}>
            <Ionicons name="wifi" size={22} color="#777" />
            <Text style={styles.utilitiesText}>Free Wi-Fi</Text>
          </View>
          
          <View style={styles.utilitiesItem}>
            <MaterialCommunityIcons name="volume-off" size={22} color="#777" />
            <Text style={styles.utilitiesText}>Quiet Zone</Text>
          </View>
          
          <View style={styles.utilitiesItem}>
            <FontAwesome5 name="charging-station" size={22} color="#777" />
            <Text style={styles.utilitiesText}>CC</Text>
          </View>
        </View>
        
        {/* Book a Table */}
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
          {/* Left column - Labels */}
          <View style={styles.vibeLabelsColumn}>
            <Text style={styles.vibeLabel}>Music playing</Text>
            <Text style={styles.vibeLabel}>Today's special</Text>
            <Text style={styles.vibeLabel}>Noise level</Text>
          </View>
          
          {/* Middle column - Values */}
          <View style={styles.vibeValuesColumn}>
            <Text style={styles.vibeValue}>Acoustic Chill</Text>
            <Text style={styles.vibeValue}>Avocado Toast</Text>
            <Text style={styles.vibeValue}>Moderate</Text>
          </View>
          
          {/* Right column - Cat with message */}
          <View style={styles.catMessageContainer}>
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
        
        {/* Hop Crowd */}
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
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  emptySpace: {
    width: 24,
  },
  cafeNameContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  cafeName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'SpaceMono-Regular', // Make sure this font is loaded
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
    fontSize: 20,
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
    justifyContent: 'space-between',
  },
  utilitiesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  utilitiesText: {
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
  vibeLabelsColumn: {
    flex: 0.4,
    justifyContent: 'space-between',
  },
  vibeValuesColumn: {
    flex: 0.6,

    justifyContent: 'space-between',
  },
  vibeLabel: {
    fontSize: 14,
    color: '#777',
    marginBottom: 14,
  },
  vibeValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 14,
  },
  catMessageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  catIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  messageBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    maxWidth: '100%',
  },
  messageText: {
    fontSize: 12,
    color: '#333',
  },
  crowdText: {
    fontSize: 15,
    marginBottom: 8,
    color: '#444',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#FFDDC1', // Lighter orange for the background
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    width: '60%',
    height: '100%',
    backgroundColor: '#FF9F5F', // Same orange as the order button
  },
});