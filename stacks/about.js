import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AboutScreen from "../screens/about"

const Stack = createStackNavigator()

const AboutStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#252545"
      },
      headerTintColor: "#e9e9e9",
      headerTitleStyle: {
        fontFamily: "Nunito-Bold"
      }
    }}
  >
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={{ title: "About" }}
    />
  </Stack.Navigator>
)

export default AboutStack
