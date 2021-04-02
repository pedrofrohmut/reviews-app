import React from "react"
import { StyleSheet, Text, View } from "react-native"

const App = () => (
  <View style={styles.appContainer}>
    <Text>Hello World!</Text>
  </View>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#e9e9e9"
  }
})

export default App
