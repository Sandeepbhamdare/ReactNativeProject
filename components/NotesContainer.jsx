import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Note from "./Note";

export default function NotesContainer({navigation}) {
    return (
        <ScrollView nestedScrollEnabled={true} style={{ backgroundColor: "#e6ebff" }} >
            <View style={styles.notesContainer}>
                <Note navigation={navigation} />
                <Note />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    notesContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 15,
        gap: 12
    }

})