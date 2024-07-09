import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon  from "react-native-vector-icons";
import NotesContainer from "../../components/NotesContainer";
export default function Home() {
    return (
        <>
        <View style={styles.filterList}>
            <Text style={[styles.listItem,styles.activeItem]}>All</Text>
            <Text style={styles.listItem}>Personal</Text>
            <Text style={styles.listItem}>General</Text>
            <Text style={styles.listItem}>To-do</Text>
        </View>
            <NotesContainer/>
        </>
    )
}

const styles=StyleSheet.create({

    filterList:{
        backgroundColor:"#e6ebff",
        flexDirection:"row",
        gap:15,
        paddingHorizontal:20,
        paddingVertical:12
    },
    listItem:{
        fontSize:15,
        paddingHorizontal:10,
        paddingVertical:5
    },
    activeItem:{
        borderRadius:12,
        borderColor:"#5d579c",
        borderWidth:1,
        color:"#5d579c"
    }
})