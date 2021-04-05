import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const AddButtom = ({ setIsModalOpen }) => {
  return (
    <TouchableOpacity
      onPress={() => setIsModalOpen(true)}
      style={localStyles.addButton}
    >
      <Icon name="plus" style={localStyles.addButtonIcon} />
      <Text style={localStyles.addButtonText}>New</Text>
    </TouchableOpacity>
  )
}

const localStyles = StyleSheet.create({
  addButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 6,
    paddingHorizontal: 6
  },
  addButtonIcon: {
    paddingRight: 6,
    fontSize: 16,
    top: 1,
    color: "#8888a8"
  },
  addButtonText: {
    fontSize: 16,
    color: "#8888a8"
  }
})

export default AddButtom
