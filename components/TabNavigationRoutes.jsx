import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Home from "../Screens/TabScreen/HomeScreen";
import Profile from "../Screens/TabScreen/ProfileScreen";
import Feedback from "../Screens/TabScreen/FeedbackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeScreenStack = () => {

    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={Home}
                options={{
                    headerTitle: "My Notes",
                    headerSearchBarOptions: "Search",
                    headerStyle: {
                        backgroundColor: "#8881d8",
                    }
                }} />
        </Stack.Navigator>
    )

}

const ProfileScreenStack = () => {

    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen name="ProfileScreen" component={Profile}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const FeedbackScreenStack = () => {

    return (
        <Stack.Navigator initialRouteName="FeedbackScreen">
            <Stack.Screen name="FeedbackScreen" component={Feedback}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default function TabNavigationRoutes() {

    return (
        <Tab.Navigator initialRouteName="Note">
            <Tab.Screen name="Home" component={HomeScreenStack}
              options={{ headerShown: false }}
            />
            <Tab.Screen name="profile" component={ProfileScreenStack}
                options={{ headerShown: false }} />
            <Tab.Screen name='feedback' component={FeedbackScreenStack}
                options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}