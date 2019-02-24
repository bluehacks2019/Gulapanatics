import React from "react"
import { Text, TouchableWithoutFeedback } from "react-native"

export default class ProfileIcon extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
        <Text>Profile</Text>
      </TouchableWithoutFeedback>
    )
  }
}
