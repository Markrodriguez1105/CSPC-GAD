import React from "react";
import { Alert, Button, Image, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from '@react-navigation/native';
import { Route } from "expo-router/build/Route";
import { router } from "expo-router";

export default function Login() {

  const navigation =  useNavigation();

  return (
    <View style={styles.container}>
      <Image style={[styles.bgImages, { right: -60, top: 200 }]} source={require("@/assets/images/genderIcon.png")}></Image>
      <Image style={[styles.bgImages, { left: -60, top: 450 }]} source={require("@/assets/images/genderIcon.png")}></Image>
      <Image style={[styles.bgImages, { left: -60, top: 10, transform: [{ rotate: '40deg' }] }]} source={require("@/assets/images/genderPerson.png")}></Image>
      <Image style={[styles.bgImages, { right: -60, top: 600, transform: [{ rotate: '-40deg' }] }]} source={require("@/assets/images/genderPerson.png")}></Image>
      <View style={{ flexDirection: "row", alignItems: "center", height: 200 }}>
        <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
        <View>
          <ThemedText type="title">CSPC GAD</ThemedText>
          <ThemedText type="subtitle">Focal Point System</ThemedText>
        </View>
      </View>
      <View style={{ gap: 20 }}>
        <View style={styles.inputField}>
          <ThemedText type="default">Username</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="example@cspc.edu.ph"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputField}>
          <ThemedText type="default">Password</ThemedText>
          <TextInput
            style={styles.input}
            keyboardType="default"
            secureTextEntry={true}
            textContentType="password"
          />
        </View>
        <Button
          onPress={() => router.push("/home")}
          title="Log In"
          color={Colors.light.button}
        />
        <ThemedText type="default">Forgot your password?</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImages: {
    position: "absolute",
    width: 200,
    height: 200,
    resizeMode: "contain",
    opacity: 0.5,
    filter: "blur(1px)",
  },
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 150,
    alignItems: "center",
    backgroundColor: Colors.light.background
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
  h3: {
    fontFamily: "Poppins",
    fontSize: 15,
  },
  logo: {
    height: 80,
    resizeMode: "contain",
  },
  input: {
    fontSize: 15,
    width: 250,
    padding: 10,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: .5,
  },
});