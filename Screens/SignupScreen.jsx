import React from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
function Signup({navigation}) {

    return (
        <ScrollView>
            <Svg
                height={88}
                viewBox="0 0 1440 322">
                <Path fill="#8881d8" d="M0,0L120,32C240,64,480,128,720,138.7C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></Path>
            </Svg>

            <View style={styles.formContainer}>
                <View style={styles.formInputs}>
                    <Icon name="user" size={25} color={"#2b284d"} />
                    <TextInput
                        style={styles.inputs}
                        placeholder="User name"
                        value=""
                    />
                </View>
                <View style={styles.formInputs}>
                    <Icon name="envelope" size={22}  color={"#2b284d"} />
                    <TextInput
                        style={styles.inputs}
                        placeholder="email"
                        value=""
                    />
                </View>
                <View style={styles.formInputs}>
                    <Icon name="lock" size={25}  color={"#2b284d"}/>
                    <TextInput
                        style={styles.inputs}
                        placeholder="password"
                        value=""
                    />
                </View>
                <View style={styles.formInputs}>
                    <MaterialIcon name="password" size={25}  color={"#2b284d"} />
                    <TextInput
                        style={styles.inputs}
                        placeholder="conform Password"
                        value=""
                    />
                </View>
                <View style={styles.signupBtn}>

                    <Button
                        title="Sign up"
                        color={"#8881d8"}
                        onPress={()=>navigation.navigate("TabNavigationRoutes")}
                    />
                </View>
            </View>

            <Text style={styles.linkText}>Already have an account? <Text style={{ color: "#8881d8" }}
            onPress={()=>navigation.navigate("Login")}>Log in</Text></Text>

            <View style={styles.linkContainer}>
                <View style={styles.linkBtn}>
                    <Icon name="facebook" size={20}  color={"#2b284d"} />
                    <Text style={{ fontSize: 18,color:"#2b284d" }}>Continue with facebook</Text>
                </View>

                <View style={styles.linkBtn}>
                    <Icon name="google" size={20}  color={"#2b284d"} />   
        <Text style={{ fontSize: 18 ,color:"#2b284d"}}>Continue with google</Text>
                </View>
            </View>

            <View style={styles.waves}>
                <Svg
                    height={87}
                    width={"100%"}
                    viewBox="0 0 1440 310"
                >
                    <Path
                        fill="#8881d8"
                        d="M0,160L60,176C120,192,240,224,360,245.3C480,267,600,277,720,245.3C840,213,960,139,1080,96C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                </Svg>

                <View style={{ height: 64, width: "100%", backgroundColor: "#8881d8" }}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    waves: {
        marginTop: -20,
        zIndex: 1

    },
    formContainer: {
        marginHorizontal: 18,
        gap: 20
    },
    formInputs: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10
    },
    inputs: {
        fontSize: 16,
        width: "80%"
    },
    signupBtn: {
        width: 150,
        alignSelf: "center"

    },
    linkText: {
        textAlign: "center",
        marginTop: 18,
        fontSize: 16,
    },
    linkContainer: {
        marginHorizontal: 18,
        marginTop: 20,
        gap: 15,
        zIndex: 2
    },
    linkBtn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#8881d8",
        borderRadius: 5
        
    },
})

export default Signup;