import React from "react";
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome';

function Login({navigation}) {

    return (
        <ScrollView>
            <Svg viewBox="0 0 1440 330"
                height={90}>
                <Path fill="#0099ff" d="M0,192L40,170.7C80,149,160,107,240,85.3C320,64,400,64,480,80C560,96,640,128,720,154.7C800,181,880,203,960,202.7C1040,203,1120,181,1200,197.3C1280,213,1360,267,1400,293.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></Path>
            </Svg>

            <SafeAreaView>
                <Image style={{ width: 400, height: 300 }} source={require('../public/Login-bro.png')} />
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
                        onPress={() => navigation.navigate("Home")}
                        title="Loign" />

                </View>
                <Text style={styles.linkTxt}>Don't have an account? <Text style={styles.specialText} onPress={()=>navigation.navigate('Signup')}>Sign up</Text></Text>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({


    formContainer: {
        marginHorizontal: 20,
        height:250
    },
    formInputs: {
        height:"20%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    inputs: {
        // backgroundColor: "#4287f5",
        fontSize: 16,
        width: "80%",
        paddingHorizontal: 12

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