import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View, Button, Alert } from "react-native"

class Game extends React.Component {
  static navigationOptions = {
    title: "Game"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Which wellness category do you want to improve on?</Text>
        <Button
          title="Physical Wellness"
          onPress={this.props.navigation.navigate("GameSpin", {
            name: "Physical Wellness"
          })}
        />
        <Button
          title="Emotional Wellness"
          onPress={this.props.navigation.navigate("GameSpin", {
            name: "Emotional Wellness"
          })}
        />
        <Button
          title="Psychological Wellness"
          onPress={this.props.navigation.navigate("GameSpin", {
            name: "Psychological Wellness"
          })}
        />
        <Button
          title="Spiritual Wellness"
          onPress={this.props.navigation.navigate("GameSpin", {
            name: "Spiritual Wellness"
          })}
        />
        <Button
          title="Social Wellness"
          onPress={this.props.navigation.navigate("GameSpin", {
            name: "Social Wellness"
          })}
        />
        <Button
          title="Intellectual Wellness"
          onPress={this.props.navigation.navigate("GameSpin", {
            name: "Intellectual Wellness"
          })}
        />

        <Text>Redeem a voucher</Text>
        <Button
          title="Redeem a voucher"
          onPress={() =>
            Alert.alert(
              "Voucher Delivered",
              "Voucher has been delivered to your email"
            )
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
})

export default Game
