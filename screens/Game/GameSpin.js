import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View, Button, Alert } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"

class Game extends React.Component {
  static navigationOptions = {
    title: "Game"
  }

  componentDidMount = () => {
    Alert.alert("Youre tasked to pray")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cirlce} />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  cirlce: {
    width: "370rem",
    height: "370rem",
    borderRadius: "185rem",
    backgroundColor: "#BFDEFF"
  }
})

export default Game
