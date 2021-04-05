import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const getAssetByRating = rating =>
  rating <= 1
    ? require("../assets/rating-1.png")
    : rating <= 2
    ? require("../assets/rating-2.png")
    : rating <= 3
    ? require("../assets/rating-3.png")
    : rating <= 4
    ? require("../assets/rating-4.png")
    : require("../assets/rating-5.png")

const Rating = ({ rating, style }) => (
  <View style={(localStyles.container, style)}>
    <Text style={localStyles.text}>GameZone rating:</Text>
    <Image source={getAssetByRating(rating)} style={localStyles.image} />
  </View>
)

const localStyles = StyleSheet.create({
  container: {
    height: 25
  },
  text: {
    color: "#888",
    fontSize: 10,
    marginBottom: 4
  },
  image: {
    height: 13,
    opacity: 0.655555
  }
})

export default Rating
