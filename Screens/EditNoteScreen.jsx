import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";


const EditNote = () => {

  

  return (
    <ScrollView style={{ backgroundColor: "#e6ebff" }}>

      <View style={styles.formContainer}>
        <TextInput
          value="Title"
          style={[styles.formInputes, styles.textInputHeight, styles.TitlText]} />

        <TextInput
          value="Personal"
          style={[styles.formInputes, styles.textInputHeight, styles.tagText]} />

        <TextInput
          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          multiline
          editable
          numberOfLines={10}
          style={[styles.formInputes, styles.inputText]} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#fbf7ff",
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginHorizontal: 10,
    marginTop: 50,
    gap: 20,
    borderRadius: 10
  },
  formInputes: {
    backgroundColor: "#e8e6ff",
    borderRadius: 10,
    fontSize: 20,
    padding: 12,
  },
  inputText: {
    textAlignVertical: "top",
    color: "#5d579c",
    fontSize: 18
  },
  textInputHeight: {
    color: "#8881d8",
    height: 60,
  },
  TitlText: {
    fontWeight: "bold",
  },
  tagText: {
    fontSize: 16
  }
})

export default EditNote;