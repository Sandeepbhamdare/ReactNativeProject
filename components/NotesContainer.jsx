import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NotesContainer() {
    return (
        <ScrollView nestedScrollEnabled={true} style={{ backgroundColor: "#e6ebff" }} >
            <View style={styles.notesContainer}>

                <View style={styles.card}>
                    <Text style={styles.cardHead}>Title</Text>
                    <Text style={styles.cardTag}>Tag : Personal</Text>
                    <Text style={styles.cardBody}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Text style={styles.cardDate}>Date:13-06-2024</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardHead}>Title</Text>
                    <Text style={styles.cardTag}>Tag : Personal</Text>
                    <Text style={styles.cardBody}>Lorem ipsum dolor dksdvopdvdmvop sit amet, consectetur adipisicing elit.</Text>
                    <Text style={styles.cardDate}>Date:13-06-2024</Text>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    notesContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: "#EDECFE",
        padding: 15,
        gap: 12
    },
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
        // textAlign: "right",
        color: "#8881d8",
        position: "absolute",
        bottom: 10,
        right: 15
    }


})