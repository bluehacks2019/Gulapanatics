import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

class Friends extends React.Component {
  static navigationOptions = {
    title: "Profile"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Search for friends here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Friends
