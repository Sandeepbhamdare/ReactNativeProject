import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

export default function Profile() {

    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={styles.profileContainer}>
                    <Icon name="sign-out" size={25} style={styles.logOutBtn} />
                    <Text style={styles.headText}>Profile Info</Text>
                    <Image source={require("../../public/profile.jpg")} style={styles.profileImage} />
                    <Text style={styles.detailText}>User Name : User1</Text>
                    <Text style={styles.detailText}>Email: User1@gmail.com</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headText: {
        position: "absolute",
        top: 15,
        fontSize: 20,
        fontWeight: "500"
    },
    profileContainer: {
        backgroundColor: "#8881d8",
        width: "95%",
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 500,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    profileImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#5d579c",
        marginVertical: 20
    },
    detailText: {
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: '500'
    },
    logOutBtn: {
        backgroundColor: "#5d579c",
        padding: 15,
        borderRadius: 30,
        color: "#e6ebff",
        position: "absolute",
        bottom: 20,
        right: 10,
        borderColor: "#e6ebff"
    }
})