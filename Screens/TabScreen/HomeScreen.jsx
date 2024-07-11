import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NotesContainer from "../../components/NotesContainer";
export default function Home({ navigation }) {
    return (
        <>
            <View style={styles.filterList}>
                <Text style={[styles.listItem, styles.activeItem]}>All</Text>
                <Text style={styles.listItem}>Personal</Text>
                <Text style={styles.listItem}>General</Text>
                <Text style={styles.listItem}>To-do</Text>
            </View>

            <View style={{backgroundColor:"#e6ebff"}}>
            <TouchableOpacity style={styles.addBtn} 
            onPress={()=>navigation.navigate("add Note")}>
                <Icon name="plus-circle" size={25} color={"#6a61be"} />
                <Text style={{fontSize:15,color:"#6a61be"}}> Add New Note</Text>
            </TouchableOpacity>
            </View>

            <NotesContainer navigation={navigation} />
        </>
    )
}

const styles = StyleSheet.create({

    filterList: {
        backgroundColor: "#e6ebff",
        flexDirection: "row",
        gap: 15,
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    listItem: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    activeItem: {
        borderRadius: 12,
        borderColor: "#5d579c",
        borderWidth: 2,
        color: "#5d579c"
    },
    addBtn: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf:"flex-end",
        backgroundColor: "#e6ebff",
        width:130,
        gap:1,
        marginVertical:6
    }
})