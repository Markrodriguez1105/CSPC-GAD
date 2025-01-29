import { StyleSheet, Text, View, ScrollView, Image, Button, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function building() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.info_container}>
          <Image style={styles.image} source={require("@/assets/images/Infrastructure/cgad/IMG_6975.jpg")}></Image>
          <View>
            <Text style={styles.building_name}>
              CGAD
            </Text>
            <Text style={styles.address} numberOfLines={2}>
              Academic Building - I, CSPC, Nabua, Camarines Sur
            </Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/modules/infras_learn_more1")} style={styles.button}>
            <Text style={{ color: Colors.light.text }}>Learn More</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.info_container}>
          <Image style={styles.image} source={require("@/assets/images/Infrastructure/Childminding Center/IMG-7660.jpg")}></Image>
          <View>
            <Text style={styles.building_name}>
              Child-Minding Center
            </Text>
            <Text style={styles.address} numberOfLines={2}>
              ??
            </Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/modules/infras_learn_more2")} style={styles.button}>
            <Text style={{ color: Colors.light.text }}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  info_container: {
    // height: 200,
    gap: 5,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: "100%",
    height: 200,
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
  }
});
