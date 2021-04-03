import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/home"
import ReviewDetailsScreen from "../screens/review-details"

const Stack = createStackNavigator()

const HomeStack = () => (
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
      name="Home"
      component={HomeScreen}
      options={{ title: "GameZone" }}
    />
    <Stack.Screen
      name="ReviewDetails"
      component={ReviewDetailsScreen}
      options={{ title: "Review Details" }}
    />
  </Stack.Navigator>
)

export default HomeStack
