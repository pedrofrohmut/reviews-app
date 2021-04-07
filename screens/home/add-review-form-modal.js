import React from "react"

import AppModal from "../../shared/modal"
import ReviewForm from "./review-form"

const AddReviewFormModal = ({ isModalOpen, setIsModalOpen, addReview }) => {
  return (
    <AppModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <ReviewForm addReview={addReview} setIsModalOpen={setIsModalOpen} />
    </AppModal>
  )
}

export default AddReviewFormModal
