import React from "react";
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function Login() {

    return (
        <>
            {/* <Text style={styles.headText}>Login</Text> */}

            <SafeAreaView>
                <Image style={{ width: 400, height: 400 }} source={require('../public/Login-bro.png')} />
            </SafeAreaView>

            <View style={styles.formContainer}>

                <View style={styles.formInputs}>
                    <Icon name="user" size={25} />
                    <TextInput
                        style={styles.inputs}
                        value=""
                        placeholder="Email"
                        keyboardType="email-address" />
                </View>

                <View style={styles.formInputs}>
                    <Icon name="lock" size={25} />
                    <TextInput
                        style={styles.inputs}
                        value=""
                        placeholder="password"
                        secureTextEntry />
                </View>

                <Text style={styles.textForgotPass}>Forgot Password?</Text>

                <View style={styles.logInBtn}>

                    <Button
                        onPress={() => Alert.alert('You tapped the Login-button!')}
                        title="Loign" />

                </View>
                <Text style={styles.linkTxt}>Don't have an account? <Text style={styles.specialText}>Sign up</Text></Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({

    headText: {
        // backgroundColor: "#e8554a",
        paddingTop: 55,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 18,
    },
    formInputs: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ccc",
        paddingHorizontal: 8,
        marginBottom: 20,
    },
    inputs: {
        // backgroundColor: "#4287f5",
        fontSize: 16,
        width: "80%",
        paddingHorizontal: 8

    },
    logInBtn: {
        width: 150,
        alignSelf: "center",
        marginTop: 10,
    },
    textForgotPass: {
        textAlign: "right", 
        marginTop: -10, 
        fontSize: 15,
        color: "#4287f5"
    },
    linkTxt: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 12
    },
    specialText: {
        color: "#4287f5"
    }
})



export default Login;