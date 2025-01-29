import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Alert } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Linking } from 'react-native';

export default function infras_learn_more() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.building_name}>
            CGAD
          </Text>
          <Text style={styles.address} numberOfLines={2}>
            Academic Building - I, CSPC, Nabua, Camarines Sur
          </Text>
        </View>
        <TouchableOpacity onPress={() => {
          const url = 'https://maps.app.goo.gl/VRk4VHicaMd5C9j58';
          Linking.openURL(url).catch((err) => {
            Alert.alert('Failed to open URL:', err);
          });
        }} style={styles.button}>
          <Text style={{ color: Colors.light.text }}>View Map</Text>
        </TouchableOpacity>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} alwaysBounceHorizontal>
          <Image style={styles.image} source={require("@/assets/images/Infrastructure/cgad/IMG_6975.jpg")}></Image>
          <Image style={styles.image} source={require("@/assets/images/Infrastructure/cgad/IMG_6974.jpg")}></Image>
        </ScrollView>
        <View>
          <Text style={styles.building_name}>About CGAD</Text>
          <View>
            <Text style={styles.description}>
              <Text style={styles.description}>
                The Magna Carta of Women (Republic Act No. 9710) defies Gender and Development Program (GAD) as the development perspective and process that is participatory and empowering, equitable, sustainable, free from violence, respectful of human rights, supportive of self0determination and actualization of human potentials. It seeks to achieve gender equality as a fundamental value that should be reflected in development choices and contends that women are active agents of development, not just passive recipients of development.
              </Text>
              {"\n"}
              {"\n"}
              <Text>
                GAD focuses on Gender Mainstreaming or a strategy for:
              </Text>
              {"\n"}
              {"\n"}
              <Text>{'\u2023'} Making women’s as well as men’s concerns and experiences an integral dimension of the design, implementation, monitoring, and evaluation of policies, programs and projects in all social, political, civil, and economic spheres so that women and men benefit equality; and</Text>
              {"\n"}
              <Text>{'\u2023'} Assessing the implications for women and men of any planned action, including legislation, policies or programs in all areas and at all levels.</Text>
              {"\n"}
              {"\n"}
              <Text>
                The implementation of GAD in government agencies, including GOCCs, finds basis in various laws and Presidential issuances.
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  building_name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 15,
  },
  button: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.light.text,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
    width: 300,
    height: 200,
    marginRight: 10,
  },
  description: {
    fontSize: 17,
  }
})