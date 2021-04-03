import React from "react"
import { Button, Text, View } from "react-native"

import globalStyles from "../styles/global"

const About = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About page</Text>
    </View>
  )
}

export default About
