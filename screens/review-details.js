import React from "react"
import { StyleSheet, Text, View } from "react-native"

import Card from "../shared/card"
import Rating from "../shared/rating"

import globalStyles from "../styles/global"

const ReviewDetails = ({ route }) => {
  const { id, title, rating, body } = route.params
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={(globalStyles.titleText, localStyles.title)}>
          {id} - {title}
        </Text>
        <Text style={(globalStyles.paragraphText, localStyles.body)}>
          {body}
        </Text>
        <Rating rating={rating} style={localStyles.rating} />
      </Card>
    </View>
  )
}

const localStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#555",
    marginBottom: 6,
    paddingBottom: 6
  },
  body: {
    color: "#222",
    paddingBottom: 6
  },
  rating: {
    marginBottom: 6,
    paddingBottom: 6
  }
})

export default ReviewDetails
