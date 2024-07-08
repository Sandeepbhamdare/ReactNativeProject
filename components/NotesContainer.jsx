import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FormIcon from "react-native-vector-icons/AntDesign";


export default function NotesContainer() {
    return (

        <ScrollView nestedScrollEnabled={true}>
        <View style={styles.notesContainer}>

            <View style={styles.card}>
                <View style={styles.cardTopSection}>

                    <Text style={{ fontSize: 16 }}>Date:13-06-2024</Text>

                    <View style={styles.cardIcons}>
                        <FormIcon name="form" style={styles.iconEdit} size={21}></FormIcon>
                        <Icon name="trash-o" size={25} style={styles.iconDelete}></Icon>
                    </View>
                </View>
                <Text style={styles.cardHead}>Title</Text>
                <Text style={styles.cardBottomSection}>Tag : Personal</Text>
                <Text style={styles.cardBottomSection}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardTopSection}>

                    <Text style={{ fontSize: 16 }}>Date:13-06-2024</Text>

                    <View style={styles.cardIcons}>
                        <FormIcon name="form" style={styles.iconEdit} size={21}></FormIcon>
                        <Icon name="trash-o" size={25} style={styles.iconDelete}></Icon>
                    </View>
                </View>
                <Text style={styles.cardHead}>Title</Text>
                <Text style={styles.cardBottomSection}>Tag : Personal</Text>
                <Text style={styles.cardBottomSection}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardTopSection}>

                    <Text style={{ fontSize: 16 }}>Date:13-06-2024</Text>

                    <View style={styles.cardIcons}>
                        <FormIcon name="form" style={styles.iconEdit} size={21}></FormIcon>
                        <Icon name="trash-o" size={25} style={styles.iconDelete}></Icon>
                    </View>
                </View>
                <Text style={styles.cardHead}>Title</Text>
                <Text style={styles.cardBottomSection}>Tag : Personal</Text>
                <Text style={styles.cardBottomSection}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardTopSection}>

                    <Text style={{ fontSize: 16 }}>Date:13-06-2024</Text>

                    <View style={styles.cardIcons}>
                        <FormIcon name="form" style={styles.iconEdit} size={21}></FormIcon>
                        <Icon name="trash-o" size={25} style={styles.iconDelete}></Icon>
                    </View>
                </View>
                <Text style={styles.cardHead}>Title</Text>
                <Text style={styles.cardBottomSection}>Tag : Personal</Text>
                <Text style={styles.cardBottomSection}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </View>

        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    notesContainer: {
        backgroundColor: "#f8f9fa",
        padding: 15,
        gap: 15
    },
    card: {
        // backgroundColor: "gray",
        padding: 15,
        height: 200,
        borderRadius: 10,
        borderWidth: 1
    },
    cardTopSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        marginHorizontal: 20,
        alignItems: "center"
    },
    cardIcons: {
        flexDirection: "row",
        gap: 20
    },
    iconDelete: {
        paddingVertical: 4,
        paddingLeft: 8,
        paddingRight: 6,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        alignSelf: "center",
    },
    iconEdit: {
        alignSelf: "center",
        paddingVertical: 4,
        paddingLeft: 8,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20
    },
    cardHead: {
        textAlign: "center",
        fontSize: 22,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    cardBottomSection: {
        marginTop: 5,
        fontSize: 17
    },
    navBar: {
        backgroundColor: "blue",
        height: "20%",
    }
})