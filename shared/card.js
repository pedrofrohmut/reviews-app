import React from "react"
import { StyleSheet, View } from "react-native"

const Card = ({ children }) => {
  return (
    <View style={localStyles.card}>
      <View style={localStyles.content}>{children}</View>
    </View>
  )
}

const localStyles = StyleSheet.create({
  card: {
    alignSelf: "center",
    backgroundColor: "#d5d5e1",
    borderRadius: 4,
    width: "98%",
    marginBottom: 18,
    shadowColor: "#444",
    // IOS
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // Android
    elevation: 3
  },
  content: {
    padding: 16
  }
})

export default Card
