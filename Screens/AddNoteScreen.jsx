import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddNote = () => {

    return (
        <ScrollView style={styles.containerBg}>
            <View style={styles.formContianer} >

                <View style={styles.lableBorder}>
                    <Text style={styles.lableText}>Note Title</Text>
                    <TextInput style={[styles.textInput, styles.textInputHeight]}
                        placeholder="any title..."
                        placeholderTextColor={"gray"}
                    />

                </View>

                <View style={styles.lableBorder}>
                    <Text style={styles.lableText}>Tag Name</Text>
                    <TextInput style={[styles.textInput, styles.textInputHeight]}
                        placeholder="tag..."
                        placeholderTextColor={"gray"}
                    />
                </View>

                <View style={styles.lableBorder}>
                    <Text style={styles.lableText}>Description</Text>
                    <TextInput
                        multiline
                        editable
                        numberOfLines={10}
                        style={[styles.textInput, styles.textAlign]}
                        placeholder="write note..."
                        placeholderTextColor={"gray"}
                    />
                </View>
                <TouchableOpacity style={styles.actionBtn}>
                    <Text style={styles.btnText}>Note Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerBg: {
        backgroundColor: "#e6ebff",
    },
    formContianer: {
        gap: 25,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "#fbf7ff",
        borderRadius: 10
    },
    textInput: {
        backgroundColor: "#e8e6ff",
        borderRadius: 10,
        fontSize: 20,
        padding: 12,
    },
    textInputHeight: {
        height: 60
    },
    textAlign: {
        textAlignVertical: "top"
    },
    lableBorder: {
        borderColor: "#e8e6ff",
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 15,
        borderRadius: 10,
    },
    lableText: {
        position: "absolute",
        top: -13,
        left: 25,
        fontSize: 16,
        backgroundColor: "#fbf7ff",
        paddingHorizontal: 5
    },
    actionBtn:{
        backgroundColor: "#5d579c",
        width:150,
        height:50,
        borderRadius:5,
        alignSelf:"center"
    },
    btnText:{
        color: "#e6ebff",
        textAlign:"center",
        marginVertical:"auto",
        fontSize:17,
        fontWeight:"bold"
    }
})

export default AddNote;