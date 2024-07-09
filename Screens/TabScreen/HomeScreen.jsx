import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon  from "react-native-vector-icons";
import NotesContainer from "../../components/NotesContainer";
export default function Home() {
    return (
        <>
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Home Screen</Text>
            </View> */}
            <NotesContainer/>
        </>
    )
}

const styles=StyleSheet.create({

    header:{
        height:80,
        backgroundColor:"#8881d8"
    }
})