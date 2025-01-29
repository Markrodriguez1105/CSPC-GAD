import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors"
import { ThemedText } from "@/components/ThemedText";
import Activities_icon from "@/assets/images/menu_icon/activities"
import Agenda_icon from "@/assets/images/menu_icon/agenda"
import Contact_icon from "@/assets/images/menu_icon/contact"
import Infrastructure_icon from "@/assets/images/menu_icon/infrastructure"
import Laws_icon from "@/assets/images/menu_icon/laws"
import Statistic_icon from "@/assets/images/menu_icon/statistic"
import Structure_icon from "@/assets/images/menu_icon/structure"
import Snake_icon from "@/assets/images/menu_icon/snake"
import { router } from "expo-router";

export default function Home() {
    const icon_width = 60;
    const icon_height = 42;
    return (
        <View style={styles.container}>
            <Image style={[styles.bgImages, { right: -60, top: 200 }]} source={require("@/assets/images/genderIcon.png")}></Image>
            <Image style={[styles.bgImages, { left: -60, top: 450 }]} source={require("@/assets/images/genderIcon.png")}></Image>
            <Image style={[styles.bgImages, { left: -60, top: 10, transform: [{ rotate: '40deg' }] }]} source={require("@/assets/images/genderPerson.png")}></Image>
            <Image style={[styles.bgImages, { right: -60, top: 600, transform: [{ rotate: '-40deg' }] }]} source={require("@/assets/images/genderPerson.png")}></Image>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
                <View>
                    <ThemedText type="title">CSPC GAD</ThemedText>
                    <ThemedText type="subtitle">Focal Point System</ThemedText>
                </View>
            </View>
            <View style={styles.menu_container}>
                <View style={{ position: "absolute", left: 75 }}>
                    <Snake_icon />
                </View>
                <TouchableOpacity onPress={() => router.push("/(pages)/structure")} >
                    <View style={[styles.circle, { position: "absolute", top: -20, left: 110 }]}>
                        <Structure_icon width={icon_width} height={icon_height} color={Colors.light.text} />
                        <Text style={styles.menu_title}>GAD</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(pages)/statistics")}>
                    <View style={[styles.circle, { position: "absolute", top: 75, left: 55 }]}>
                        <Statistic_icon width={icon_width} height={icon_height} color={Colors.light.text} />
                        <Text style={styles.menu_title}>Statistic</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(pages)/building")}>
                    <View style={[styles.circle, { position: "absolute", top: 130, left: 160 }]}>
                        <Infrastructure_icon width={icon_width} height={icon_height} color={Colors.light.text} />
                        <Text style={styles.menu_title}>Facilities</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(pages)/activities")}>
                    <View style={[styles.circle, { position: "absolute", top: 235, left: 120 }]}>
                        <Activities_icon width={icon_width} height={icon_height} color={Colors.light.text} />
                        <Text style={styles.menu_title}>Activities</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(pages)/laws")}>
                    <View style={[styles.circle, { position: "absolute", top: 300, left: 230 }]}>
                        <Laws_icon width={icon_width} height={icon_height} color={Colors.light.text} />
                        <Text style={styles.menu_title}>Laws</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(pages)/agenda")}>
                    <View style={[styles.circle, { position: "absolute", top: 410, left: 190 }]}>
                        <Agenda_icon width={icon_width} height={icon_height} color={Colors.light.text} />
                        <Text style={styles.menu_title}>Agenda</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/(pages)/contact")}>
                    <View style={[styles.circle, { position: "absolute", top: 470, left: 290, zIndex: 9 }]}>
                        <Contact_icon width={icon_width} height={icon_height} color={Colors.light.text} />
                        <Text style={styles.menu_title}>Contacts</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.background
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bgImages: {
        position: "absolute",
        width: 200,
        height: 200,
        resizeMode: "contain",
        opacity: 0.5,
        filter: "blur(1px)",
    },
    logo: {
        height: 80,
        resizeMode: "contain",
    },
    menu_container: {
        width: "100%",
        flex: 2,
    },
    menu_icon: {
        width: 100,
    },
    circle: {
        justifyContent: "center",
        width: 80,
        height: 80,
        alignItems: "center",
        borderRadius: "50%",
        borderColor: Colors.light.text,
        borderWidth: 6,
    },
    menu_title: {
        color: Colors.light.text,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
    }
});