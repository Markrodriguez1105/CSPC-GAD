import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Alert } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Linking } from 'react-native';

export default function infras_learn_more2() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.building_name}>
                        Child-Minding Center
                    </Text>
                    <Text style={styles.address} numberOfLines={2}>
                        ??
                    </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    Alert.alert('No Address');
                }} style={styles.button}>
                    <Text style={{ color: Colors.light.text }}>View Map</Text>
                </TouchableOpacity>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} alwaysBounceHorizontal>
                    <Image style={styles.image} source={require("@/assets/images/Infrastructure/Childminding Center/IMG-9355.jpg")}></Image>
                    <Image style={styles.image} source={require("@/assets/images/Infrastructure/Childminding Center/IMG-7660.jpg")}></Image>
                </ScrollView>
                <View>
                    <Text style={styles.building_name}>About  Child-Minding Center</Text>
                    <View>
                        <Text style={styles.description}>
                            <Text style={styles.description}>
                                The Child – Minding Center is implemented based on the principle that the child is at the center of development and whose needs are holistic. Hence, its goal is to promote gender -sensitive and holistic growth and development in children under the age of five by focusing on their physical, socio – emotional, socio -values, and cognitive elements in a homelike setting.
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