import { ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, Linking, Alert } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function contact() {
  const contacts = [
    {
      name: 'Dr. Amado A. Oliva Jr.',
      position: 'SUC President III',
      profile: require('@/assets/images/default_profile.jpg')
    },
    {
      name: 'DR. JOCELYN O. JINTALAN',
      position: 'VP of Academic Affairs',
      profile: require('@/assets/images/default_profile.jpg')
    },
    {
      name: 'Prof. Alvin Franco A. Agtarap',
      position: 'Head',
      profile: require('@/assets/images/default_profile.jpg')
    },
    {
      name: 'shanelle jan m. escuro',
      position: 'Secretariat',
      profile: require('@/assets/images/default_profile.jpg')
    },
    {
      name: 'Marivic M. Eugenio',
      position: 'Childminding Center Manager',
      profile: require('@/assets/images/default_profile.jpg')
    },
    {
      name: 'Lyndon Jay V. Filio',
      position: 'Media Creative and Publicist',
      profile: require('@/assets/images/default_profile.jpg')
    },
    {
      name: 'Eljhun “Sami” L. Manlangit',
      position: 'GAD RREC',
      profile: require('@/assets/images/default_profile.jpg')
    },
    {
      name: 'Johna B. Nacioal',
      position: 'GAD RCC',
      profile: require('@/assets/images/default_profile.jpg')
    },

  ]
  return (
    <ScrollView>
      <View style={styles.container}>

        {
          contacts.map((item, index) => {
            return (
              <View key={index} style={styles.card}>
                <Image style={styles.image} source={item.profile}></Image>
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name.toUpperCase()}</Text>
                  <Text style={styles.position}>{item.position}</Text>
                  <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {
                      Linking.openURL('mailto:example@gmail.com').catch((err) => {
                        Alert.alert('Failed to open URL:', err);
                      });
                    }} style={[styles.button, { backgroundColor: '#D33528' }]}>
                      <FontAwesome name="envelope" size={20} color="white" />
                      <Text style={styles.buttonText}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                      Linking.openURL('tel:+123456789').catch((err) => {
                        Alert.alert('Failed to open URL:', err);
                      })
                    }
                      style={[styles.button, { backgroundColor: '#4DE835' }]}>
                      <FontAwesome name="phone" size={20} color="white" />
                      <Text style={styles.buttonText}>Phone</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 15,
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
})