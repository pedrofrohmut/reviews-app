import React, { useState } from "react"
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native"

import globalStyles from "../styles/global"

const INITIAL_REVIEWS = [
  {
    id: 1,
    title: "Zelda, Breath of fire",
    rating: 5,
    body: "Adipisicing quasi aut voluptas quidem dolorem Illum at repellendus"
  },
  {
    id: 2,
    title: "Gotta catch them all",
    rating: 4,
    body: "Adipisicing quasi aut voluptas quidem dolorem Illum at repellendus"
  },
  {
    id: 3,
    title: "Not so 'Final' Fantasy",
    rating: 3,
    body: "Adipisicing quasi aut voluptas quidem dolorem Illum at repellendus"
  }
]

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS)
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        keyExtractor={review => review.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home
