import { StyleSheet } from "react-native"

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff"
  },
  titleText: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    fontWeight: "700",
    color: "#444"
  },
  paragraphText: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#d5d5d5",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14
  },
  inputGroup: {
    marginBottom: 12
  },
  errorText: {
    color: "#900",
    fontSize: 13,
    paddingLeft: 4,
    paddingTop: 2
  }
})

export default globalStyles
