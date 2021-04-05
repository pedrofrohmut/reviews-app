import React from "react"
import { Text } from "react-native"

import AppModal from "../../shared/modal"

const AddReviewFormModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <AppModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <Text>Hello from modal</Text>
    </AppModal>
  )
}

export default AddReviewFormModal
