import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";

const Splash = ({ navigation }) => {

    const [animation, setAnimation] = useState(true)
    const [isAuthenticate, setIsAuthenticate] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimation(false)
            navigation.replace(isAuthenticate === true ? "Home" : "Auth")
        }, 5000)
    }, [])

    return (
        <>

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require("../public/logo.png")} style={styles.Logo} />
                    <View>
                        <Text style={styles.Caption1}>Save your </Text>
                        <Text style={styles.Caption2}>notes Could</Text>
                    </View>
                </View>
                <Text style={styles.title}>iNotebook</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8881d8",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        paddingBottom: 15
    },
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    Logo: {
        height: 100,
        width: 100,
        borderRadius: 25
    },
    Caption1: {
        fontWeight: "bold",
        fontSize: 15
    },

    Caption2: {
        fontWeight: "bold",
        fontSize: 25

    },

})

export default Splash;