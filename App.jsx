// import 'react-native-gesture-handler';
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/LoginScreen.jsx";
import Signup from "./Screens/SignupScreen.jsx";
import Splash from "./Screens/SplashScreen.jsx";
import TabNavigationRoutes from "./components/TabNavigationRoutes.jsx";


const Stack = createNativeStackNavigator();

const Auth = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
        options={{
          headerStyle: { backgroundColor: "#0099ff" },
          headerTitleStyle: { color: "white" }
        }} />
      <Stack.Screen name="Signup" component={Signup}
        options={{
          headerStyle: { backgroundColor: "#0099ff" },
          headerTitleStyle: { color: "white" }
        }} />
    </Stack.Navigator>

  )
}


export default function App() {

  return (
    <>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">

          <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }} />

          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />

          {/* <Stack.Screen name="Home" component={HomeScreen}
            options={{
              headerSearchBarOptions: "Search",
              headerLeft: () => (
                <Icon name="menu" size={25} color={"black"} style={{ marginRight: 10 }}
                  onPress={() => Alert.alert("Menu")} />
              )
            }} /> */}
          <Stack.Screen name="TabNavigationRoutes" component={TabNavigationRoutes}
            options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )

}
