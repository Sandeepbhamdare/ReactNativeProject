import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Account from "../Screens/AccountScreen";
import Feedback from "../Screens/FeedbackScreen";
import NotesContainer from "./NotesContainer";

export default function TabBar() {
    const Tab = createBottomTabNavigator()

    return (
        // <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={NotesContainer } />
                <Tab.Screen name="Account" component={Account} />
                <Tab.Screen name="About Us" component={Feedback } />
            </Tab.Navigator>
        // </NavigationContainer>
    )
}