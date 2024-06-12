import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Login from "./components/Login";

export default function App(){

  return(
    <>
    <SafeAreaView>
      <ScrollView>
      <Login/>
      </ScrollView>
    </SafeAreaView>
    </>
  )
}
