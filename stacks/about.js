import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AboutScreen from "../screens/about"
import Header from "../layout/header"

const Stack = createStackNavigator()

const AboutStack = () => (
  <Stack.Navigator
    initialRouteName="About"
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
      options={({ navigation }) => ({
        headerTitle: props => (
          <Header {...props} navigation={navigation} title="About" />
        )
      })}
    />
  </Stack.Navigator>
)

export default AboutStack
