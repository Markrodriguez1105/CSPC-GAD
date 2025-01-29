import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert, Linking } from 'react-native'
import React, { useState } from 'react'
import SearchIcon from "@/assets/images/searchIcon"
import { Colors } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient';


export default function laws() {
  const [item, searchInput] = React.useState('');

  function search() {
    let searchedItem = laws;
    searchedItem = searchedItem.filter((law) => {
      if (law.title.match(item) || law.code.match(item)) {
        return law;
      }
    })
    return searchedItem;
  }

  const laws = [
    {
      title: "Magna Carta of Women",
      code: "R.A. 9710",
      bgColor: ['#9231CC', '#6D398C'],
      link: 'https://www.officialgazette.gov.ph/2009/08/14/republic-act-no-9710/'
    },
    {
      title: "Anti-Violence Against Women and Children Act",
      code: "R.A. 9262",
      bgColor: ['#4DE834', '#59B34B'],
      link: 'https://www.officialgazette.gov.ph/2004/03/08/republic-act-no-9262-s-2004/',
    },
    {
      title: "Anti-Rape Law of 1997",
      code: "R.A. 8353",
      bgColor: ['#9F3229', '#EF3F30'],
      link: 'https://pcw.gov.ph/republic-act-8353-the-anti-rape-law-of-1997/',
    },
    {
      title: "Anti-Sexual Harassment of 1995",
      code: "R.A. 7877",
      bgColor: ['#BF7116', '#F7921C'],
      link: 'https://pcw.gov.ph/faq-republic-act-7877-anti-sexual-harassment-act-of-1995/'
    },
    {
      title: "Anti-Bullying Act of 2013",
      code: "R.A. 10627",
      bgColor: ['#64c8fb', '#33679a'],
      link: 'https://lawphil.net/statutes/repacts/ra2013/ra_10627_2013.html'
    },
    {
      title: "Anti-Trafficking in Persons Act of 2003",
      code: "R.A. 9208",
      bgColor: ['#433572', '#859bc6'],
      link: 'https://www.officialgazette.gov.ph/2003/05/26/republic-act-no-9208-s-2003/'
    },
  ]
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ gap: 20, }}>
        <View style={styles.search_field}>
          <SearchIcon color={Colors.light.button} width={40} height={40}>
          </SearchIcon>
          <TextInput onChangeText={searchInput} style={{ color: Colors.light.text, fontSize: 15, }}
            placeholderTextColor={Colors.light.text}
            placeholder="Laws title / RA Code"
            keyboardType="default"
          />
        </View>
        {
          search().map((item, index) => {
            return (
              <LinearGradient key={index} start={{ x: 0.9, y: 0.1 }} colors={[item.bgColor[0], item.bgColor[1]]} style={styles.card}>
                <Text style={styles.law_title}>{item.title}</Text>
                <Text style={styles.law_code}>{item.code}</Text>
                <Text onPress={() => {
                  const url = item.link;
                  Linking.openURL(url).catch((err) => {
                    Alert.alert('Failed to open URL:', err);
                  });
                }} style={styles.read_now}>View Source</Text>
              </LinearGradient>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  card: {
    padding: 20,
    height: 200,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  law_title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  law_code: {
    color: 'white',
    fontSize: 25,
  },
  read_now: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  search_field: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    padding: 10,
  }
})