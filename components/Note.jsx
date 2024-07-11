import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Note({navigation}){

    return (
        <Pressable>
            <View style={styles.card}>
                <Text style={styles.cardHead}>Title</Text>
                <Text style={styles.cardTag}>Tag : Personal</Text>
                <Text style={styles.cardBody}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                <Text style={styles.cardDate}>Date:13-06-2024</Text>
            </View>
        </Pressable>
    )
}



const styles = StyleSheet.create({
    card: {
        padding: 10,
        width: 175,
        borderRadius: 10,
        backgroundColor: "#fbf7ff",
        paddingBottom: 30
    },
    cardHead: {
        color: "#8881d8",
        fontWeight: "bold",
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    cardBody: {
        color: "#5d579c",
        backgroundColor: "#e8e6ff",
        padding: 10,
        borderRadius: 10,
        paddingBottom: 15,
        fontSize: 17
    },
    cardTag: {
        fontSize: 15,
        paddingVertical: 10,
        color: "#8881d8"
    },
    cardDate: {
        paddingTop: 15,
        fontSize: 11,
        color: "#8881d8",
        position: "absolute",
        bottom: 10,
        right: 15
    }
})