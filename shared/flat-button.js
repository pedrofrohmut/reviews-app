import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const FlatButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={localStyles.container}>
      <Text style={localStyles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
)

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: "#c00",
    borderRadius: 6,
    paddingVertical: 8
  },
  text: {
    textAlign: "center",
    color: "#f3f3f3",
    fontSize: 14,
    fontWeight: "700"
  }
})

export default FlatButton
