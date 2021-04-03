import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const openMenu = navigation => {
  navigation.openDrawer()
}

const Header = ({ navigation, title }) => (
  <View style={localStyles.header}>
    <Icon
      name="bars"
      size={28}
      style={localStyles.icon}
      onPress={() => openMenu(navigation)}
    />
    <View>
      <Text style={localStyles.headerText}>{title}</Text>
    </View>
  </View>
)

const localStyles = StyleSheet.create({
  header: {
    height: "100%",
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#e9e9e9",
    letterSpacing: 1
  },
  icon: {
    color: "#e9e9e9",
    position: "absolute",
    left: 16
  }
})

export default Header
