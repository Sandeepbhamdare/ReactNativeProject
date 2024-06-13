import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App(){

  return(
    <>
    <SafeAreaView>
      <ScrollView>
      <Login/>
      {/* <Signup/> */}
      </ScrollView>
    </SafeAreaView>
    </>
  )
}
