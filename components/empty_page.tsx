import { Colors } from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function empty_page() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FontAwesome name="file-o" size={70} color="grey" />
        <Text style={{ fontSize: 25, color: 'grey' }}>Empty Page</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  },
  card: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 60,
    borderRadius: 20,
    // backgroundColor: Colors.light.background
  }
})