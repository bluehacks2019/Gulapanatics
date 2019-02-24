import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

class Journal extends React.Component {
  static navigationOptions = {
    title: "Journal"
  }

  state = {}

  _viewEmotions = () => {
    this.props.navigation.navigate("WeeklySummary")
  }

  render() {
    const bb = this.props.navigation.getParam("id")
    return (
      <View style={styles.container}>
        <Text>Feb 28, 2019 {bb}</Text>
        <Text>
          After I woke up this morning, I made the regrettable decision of
          waking up. I tried to go back to sleep but I could not relax. Today
          was one of those days where either I get up or I get up. I then
          decided to go outside, but because it was raining, I got wet. Today I
          am thankful for my life because Dante Gulapa exists.
        </Text>
        <TouchableOpacity onPress={() => this._viewEmotions()}>
          <Text>View Emotions</Text>
        </TouchableOpacity>
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
