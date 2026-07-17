// import 'react-native-gesture-handler';
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/LoginScreen.jsx";
import Signup from "./Screens/SignupScreen.jsx";
import Splash from "./Screens/SplashScreen.jsx";
import TabNavigationRoutes from "./components/TabNavigationRoutes.jsx";
import AddNote from "./Screens/AddNoteScreen.jsx";
import EditNote from "./Screens/EditNoteScreen.jsx";
import Icon from "react-native-vector-icons/FontAwesome6";
import DelIcon from "react-native-vector-icons/FontAwesome";


const Stack = createNativeStackNavigator();

const Auth = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
        options={{
          headerStyle: { backgroundColor: "#8881d8" },
          headerTitleStyle: { color: "white" },
          headerShadowVisible: false
        }} />
      <Stack.Screen name="Signup" component={Signup}
        options={{
          headerStyle: { backgroundColor: "#8881d8" },
          headerTitleStyle: { color: "white" },
          headerShadowVisible: false,
          headerTintColor: "white"
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

          <Stack.Screen name="TabNavigationRoutes" component={TabNavigationRoutes}
            options={{ headerShown: false }} />

          <Stack.Screen name="add Note" component={AddNote}
            options={{
              headerStyle: {
                backgroundColor: "#8881d8"
              },
              headerTintColor: "#e6ebff"
            }} />

          <Stack.Screen name="edit Note" component={EditNote}
          options={{
            headerStyle: {
              backgroundColor: "#8881d8"
            },
            headerTintColor: "#e6ebff",
            title:"",
            headerRight:()=>(
              <>
              {/* <Icon name="check" size={25} color={"#e6ebff"} /> */}
              <DelIcon name="trash" size={25}  color={"#e6ebff"} />
              </>
          )
          }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )

}
