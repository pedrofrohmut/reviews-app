import React from "react"
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

const openMenu = navigation => {
  navigation.openDrawer()
}

const Header = ({ navigation, title }) => (
  <ImageBackground
    source={require("../assets/game_bg.png")}
    style={localStyles.container}
  >
    <Icon
      name="bars"
      size={28}
      style={localStyles.icon}
      onPress={() => openMenu(navigation)}
    />
    <View style={localStyles.titleContainer}>
      <Image
        source={require("../assets/heart_logo.png")}
        style={localStyles.titleImage}
      />
      <Text style={localStyles.titleText}>{title}</Text>
    </View>
  </ImageBackground>
)

const localStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    color: "#494969",
    position: "absolute",
    left: 16
  },
  titleContainer: {
    flexDirection: "row"
  },
  titleImage: {
    marginRight: 6,
    height: 30,
    width: 30
  },
  titleText: {
    fontWeight: "700",
    fontSize: 20,
    color: "#494969",
    letterSpacing: 1
  }
})

export default Header
