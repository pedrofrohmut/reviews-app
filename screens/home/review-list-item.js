import React from "react"
import { Text } from "react-native"

import Card from "../../shared/card"

import globalStyles from "../../styles/global"

const ReviewListItem = ({ title }) => {
  return (
    <Card>
      <Text style={globalStyles.titleText}>{title}</Text>
    </Card>
  )
}

export default ReviewListItem
