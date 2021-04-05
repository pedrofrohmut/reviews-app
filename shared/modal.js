import React from "react"
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const AppModal = ({ isModalOpen, setIsModalOpen, children }) => {
  return (
    <Modal
      visible={isModalOpen}
      style={localStyles.container}
      animationType="slide"
    >
      <View style={localStyles.closeButtonContainer}>
        <TouchableOpacity
          style={localStyles.closeButton}
          onPress={() => setIsModalOpen(false)}
        >
          <Icon name="times" style={localStyles.closeButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={localStyles.content}>{children}</View>
    </Modal>
  )
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  closeButtonContainer: {
    backgroundColor: "#e9e9e9"
  },
  closeButton: {
    width: 32
  },
  closeButtonIcon: {
    padding: 5,
    fontSize: 23,
    color: "#933",
    opacity: 0.6
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10
  }
})

export default AppModal
