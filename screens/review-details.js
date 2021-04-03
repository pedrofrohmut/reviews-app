import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

import globalStyles from "../styles/global"

const ReviewDetails = ({ navigation, route }) => {
  const { id, title, rating, body } = route.params
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        {id} - {title}
      </Text>
      <Text style={localStyles.rating}>Rating: {rating}</Text>
      <Text style={globalStyles.paragraphText}>{body}</Text>
    </View>
  )
}

const localStyles = StyleSheet.create({
  rating: {
    fontSize: 12,
    color: "#888"
  }
})

export default ReviewDetails
