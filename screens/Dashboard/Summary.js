import React from "react"
import EStyleSheet from "react-native-extended-stylesheet"
import { View, Text, Button } from "react-native"

class Summary extends React.Component {
  static navigationOptions = {
    title: "Summary"
  }
  _checkWeekly = () => {
    this.props.navigation.navigate("WeeklySummary")
  }

  _checkMonthly = () => {
    this.props.navigation.navigate("MonthlySummary")
  }

  _checkYearly = () => {
    this.props.navigation.navigate("YearlySummary")
  }
  render() {
    return (
      <View style={styles.main}>
        <Text>How would you like to review your emotions, Harris?</Text>
        <Button title="Weekly" onPress={this._checkWeekly} />
        <Button title="Monthly" onPress={this._checkMonthly} />
        <Button title="Yearly" onPress={this._checkYearly} />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Summary
