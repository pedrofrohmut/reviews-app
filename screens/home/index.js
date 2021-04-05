import React, { useState } from "react"
import { View } from "react-native"

import AddReviewFormModal from "./add-review-form-modal"
import AddButtom from "./add-button"
import ReviewList from "./review-list"

import globalStyles from "../../styles/global"

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <View style={globalStyles.container}>
      <AddReviewFormModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <AddButtom setIsModalOpen={setIsModalOpen} />
      <ReviewList reviews={reviews} navigation={navigation} />
    </View>
  )
}

export default Home
