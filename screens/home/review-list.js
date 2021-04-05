import React from "react"
import { FlatList, TouchableOpacity } from "react-native"

import ReviewListItem from "./review-list-item"

const ReviewList = ({ reviews, navigation }) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={review => review.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("ReviewDetails", item)}
        >
          <ReviewListItem title={item.title} />
        </TouchableOpacity>
      )}
    />
  )
}

export default ReviewList
