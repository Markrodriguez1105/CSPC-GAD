import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Academic from "@/data/executive/academic.json"
import Admin from "@/data/executive/admin.json"
import Research from "@/data/executive/research.json"

export default function structure() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.role}>CHAIRPERSON</Text>
          </View>
          <View style={styles.member_container}>
            <Image style={styles.picture} source={require("@/assets/images/default_profile.jpg")}></Image>
            <View>
              <Text style={styles.name}>Dr. Amado A. Oliva Jr.</Text>
              <Text style={styles.position}>SUC President III</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.role}>EXECUTIVE MEMBER</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={styles.executive_container}>
              <Image style={styles.picture_executive} source={require("@/assets/images/default_profile.jpg")}></Image>
              <View>
                <Text style={styles.name_executive}>Ms. Nancy S. <Text style={{ fontSize: 12 }}>Penetrante</Text></Text>
                <Text style={styles.position_executive} numberOfLines={4}>VP of Admin and Finance</Text>
              </View>
            </View>
            <View style={[styles.executive_container, { backgroundColor: '#A1D9F9' }]}>
              <Image style={styles.picture_executive} source={require("@/assets/images/default_profile.jpg")}></Image>
              <View>
                <Text style={styles.name_executive}>Dr. Estelito R. <Text style={{ fontSize: 12 }}></Text>Clemente</Text>
                <Text style={styles.position_executive} numberOfLines={4}>VP of Academic Affairs</Text>
              </View>
            </View>
            <View style={styles.executive_container}>
              <Image style={styles.picture_executive} source={require("@/assets/images/default_profile.jpg")}></Image>
              <View>
                <Text style={styles.name_executive}>Dr. Teresita B. Salazar</Text>
                <Text style={styles.position_executive} numberOfLines={4}>VP of Research, Extension, Production, and Entrepreneurial Development</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
          <View style={{flex: 1, gap: 10}}>
            {
              Academic.map((item, index) => {
                return (
                  <View key={index} style={styles.other_member}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 11 }} numberOfLines={4}>{item.position}</Text>
                  </View>
                )
              })
            }
          </View>
          <View style={{flex: 1, gap: 10}}>
            {
              Admin.map((item, index) => {
                return (
                  <View key={index} style={[styles.other_member, {backgroundColor: '#A1D9F9'}]}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 11 }} numberOfLines={4}>{item.position}</Text>
                  </View>
                )
              })
            }
          </View>
          <View style={{flex: 1, gap: 10}}>
            {
              Research.map((item, index) => {
                return (
                  <View key={index} style={styles.other_member}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 11 }} numberOfLines={4}>{item.position}</Text>
                  </View>
                )
              })
            }
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
  header: {
    alignItems: 'center',
    backgroundColor: Colors.light.button,
  },
  role: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  member_container: {
    backgroundColor: Colors.light.background,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    gap: 20,
    padding: 20,
  },
  executive_container: {
    backgroundColor: Colors.light.background,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    padding: 20,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  picture_executive: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  name_executive: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  position: {
    fontSize: 15,
  },
  position_executive: {
    fontSize: 12,
    textAlign: 'center'
  },
  other_member: {
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 10,
  }
})