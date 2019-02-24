import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

class Journal extends React.Component {
  static navigationOptions = {
    title: "Journal"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Journal</Text>
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

export default Journal
