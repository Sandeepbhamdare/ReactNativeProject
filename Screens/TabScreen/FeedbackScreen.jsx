import React from "react";
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from "react-native";
import FbIcon from "react-native-vector-icons/FontAwesome";
import InstaIcon from "react-native-vector-icons/FontAwesome";
import TwitterIcon from "react-native-vector-icons/FontAwesome";
import YtIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Feedback() {

    return (
        <>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: "#e6ebff" }}>

                    <View style={styles.formContainer}>
                        <TextInput placeholder="full name" style={styles.textInputs} />

                        <TextInput placeholder="email" style={styles.textInputs} keyboardType="email-address" />

                        <TextInput placeholder="Type Feedback..."
                            editable
                            multiline
                            numberOfLines={10}
                            style={[styles.textInputs, styles.textAlign]}
                        />

                        {/* <Button title="Send" color="#8881d8"/> */}
                        <Text style={styles.formActionBtn}
                            onPress={() => {
                                Alert.alert("hello")
                            }}>
                            Send <Icon name="send" size={15} />
                        </Text>

                    </View>

                    <View style={styles.socialLinkContainer}>
                        <Text style={styles.socialLinksHead}>Follow Us</Text>
                        <FbIcon name={"facebook-f"} size={30} style={styles.linkIcons} />
                        <InstaIcon name={"instagram"} size={30} style={styles.linkIcons} />
                        <TwitterIcon name={"twitter"} size={30} style={styles.linkIcons} />
                        <YtIcon name={"youtube-play"} size={30} style={styles.linkIcons} />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    textInputs: {
        borderWidth: 1,
        padding: 10,
        fontSize: 17,
        borderRadius: 10,
        borderColor: "#ccc",
        backgroundColor: "#fbf7ff",
    },
    textAlign: {
        textAlignVertical: "top"
    },
    formContainer: {
        marginHorizontal: 5,
        marginVertical: 15,
        paddingHorizontal: 10,
        gap: 20,
        backgroundColor: "#e8e6ff",
        paddingVertical: 40,
        borderColor: "#8881d8",
        borderWidth: 1,
        borderRadius: 10
    },
    formActionBtn: {
        alignSelf: "center",
        textAlign: "center",
        fontSize: 18,
        backgroundColor: "#5d579c",
        padding: 10,
        width: 100,
        color: "#e6ebff",
        borderRadius: 10,
        fontWeight: "500"
    },
    socialLinksHead: {
        position: "absolute",
        top: 0,
        fontSize: 17
    },
    socialLinkContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginVertical: 18,
        paddingTop: 24
    },
    linkIcons: {
        backgroundColor: "#8881d8",
        padding: 6,
        borderRadius: 5,
        color: "#e6ebff"
    }
})