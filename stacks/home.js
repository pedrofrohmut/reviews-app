import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Header from "../layout/header"

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
      },
      headerTitleAlign: "center"
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerTitle: props => (
          <Header {...props} navigation={navigation} title="GameZone" />
        )
      })}
    />
    <Stack.Screen
      name="ReviewDetails"
      component={ReviewDetailsScreen}
      options={{ title: "Review Details" }}
    />
  </Stack.Navigator>
)

export default HomeStack
