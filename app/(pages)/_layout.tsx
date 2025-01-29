import { Tabs } from "expo-router"
import Activities_icon from "@/assets/images/menu_icon/activities"
import Agenda_icon from "@/assets/images/menu_icon/agenda"
import Contact_icon from "@/assets/images/menu_icon/contact"
import Infrastructure_icon from "@/assets/images/menu_icon/infrastructure"
import Laws_icon from "@/assets/images/menu_icon/laws"
import Statistic_icon from "@/assets/images/menu_icon/statistic"
import Structure_icon from "@/assets/images/menu_icon/structure"
import { View, Image, StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import React from "react"
import { Colors } from "@/constants/Colors"

export default () => {
    return (
        <><View style={{ flexDirection: "row", gap: 5, alignItems: "center", paddingTop: 40, paddingBottom: 20, paddingHorizontal: 20 , backgroundColor: Colors.light.background}}>
            <Image style={{ height: 60, width: 50, resizeMode: "contain", }} source={require("@/assets/images/logo.png")} />
            <View>
                <ThemedText type="subtitle">GAD Focal Point System</ThemedText>
            </View>
        </View>
            <Tabs screenOptions={{ tabBarPosition: "top", headerShown: false, tabBarStyle: { backgroundColor: Colors.light.background, paddingHorizontal: 10, height: 80, borderBottomWidth: .5, borderColor: "black"}, tabBarActiveTintColor: Colors.light.text, tabBarInactiveTintColor: Colors.light.tint }}>
                <Tabs.Screen name="structure" options={{ title: "Structure", tabBarIcon: ({ color }) => <Structure_icon color={color} width={60} height={42} /> }} />
                <Tabs.Screen name="statistics" options={{ title: "Statistic", tabBarIcon: ({ color }) => <Statistic_icon color={color} width={60} height={42} /> }} />
                <Tabs.Screen name="building" options={{ title: "Infrastructure", tabBarIcon: ({ color }) => <Infrastructure_icon color={color} width={60} height={42} /> }} />
                <Tabs.Screen name="activities" options={{ title: "Activities", tabBarIcon: ({ color }) => <Activities_icon color={color} width={60} height={42} /> }} />
                <Tabs.Screen name="laws" options={{ title: "Laws", tabBarIcon: ({ color }) => <Laws_icon color={color} width={60} height={42} /> }} />
                <Tabs.Screen name="agenda" options={{ title: "Agenda", tabBarIcon: ({ color }) => <Agenda_icon color={color} width={60} height={42} /> }} />
                <Tabs.Screen name="contact" options={{ title: "Contact", tabBarIcon: ({ color }) => <Contact_icon color={color} width={60} height={42} /> }} />
            </Tabs>
        </>
    )
}