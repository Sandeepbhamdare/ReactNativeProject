import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Home from "../Screens/TabScreen/HomeScreen";
import Profile from "../Screens/TabScreen/ProfileScreen";
import Feedback from "../Screens/TabScreen/FeedbackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoteIcon from "react-native-vector-icons/MaterialIcons";
import FeedbackIcon from "react-native-vector-icons/FontAwesome";

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
                    },
                    headerTintColor: "#e6ebff"
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
                options={{
                    headerTitle: "FeedBack",
                    headerStyle: {
                        backgroundColor: "#8881d8",
                    },
                    headerTintColor: "#e6ebff",
                    headerTitleAlign: "center"
                }} />
        </Stack.Navigator>
    )
}

export default function TabNavigationRoutes() {

    return (
        <Tab.Navigator initialRouteName="Note"

            screenOptions={{
                tabBarActiveTintColor: "#2b284d",
                tabBarInactiveTintColor: "#e8e6ff",
                tabBarStyle: {
                    backgroundColor: "#5d579c",
                    height: 65,
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    paddingBottom: 6
                }
            }}>

            <Tab.Screen name="Home" component={HomeScreenStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Notes',
                    tabBarIcon: ({ color }) => (
                        <NoteIcon name="file-copy" size={27} color={color} />
                    ),

                }}
            />
            <Tab.Screen name="profile" component={ProfileScreenStack}
                options={{
                    headerShown: false,

                    tabBarIcon: ({focused}) => (
                        <Image source={require("../public/profile.jpg")}
                            style={[styles.profileIcon,focused?styles.activeImage:""]} />
                    )
                }} />
            <Tab.Screen name='feedback' component={FeedbackScreenStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FeedbackIcon name="send" color={color} size={24} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    profileIcon: { width: 30, height: 30, borderRadius: 20,
        borderWidth:1,
        borderColor:"#5d579c"
    },
    activeImage:{
        borderColor:"#2b284d"
    }
})