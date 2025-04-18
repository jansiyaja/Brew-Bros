import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ViewOrderButton = () => {
  return (
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>View Order • ₹180</Text>
      </TouchableOpacity>
    );
}

export default ViewOrderButton

const styles = StyleSheet.create({
    orderButton: {
    backgroundColor: '#FFE8D6',
    padding: 16,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
})