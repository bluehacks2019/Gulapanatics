import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import EStyleSheet from "react-native-extended-stylesheet"

const lib = {
  1: "#ff8282",
  2: "#ff9e82",
  3: "#ffdf82",
  4: "#beff82",
  5: "#82ff82"
}

class MonthlySummary extends React.Component {
  static navigationOptions = {
    title: "Monthly Summary"
  }
  state = {
    clicked: false
    // add text here later ,and general emotions
  }

  _viewJournal = id => {
    this.props.navigation.navigate("JournalEntry", {
      id
    })
  }

  _handleClick = () => {
    console.log("clicked")
    this.setState({
      clicked: true
    })
  }
  render() {
    return (
      <View style={styles.main}>
        <Text>Here are your emotions per month:</Text>
        <Text>February</Text>
        {/* Add chevron */}
        <View style={styles.squareContainer}>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={[styles.square, { backgroundColor: lib[1] }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={[styles.square, { backgroundColor: lib[1] }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={[styles.square, { backgroundColor: lib[2] }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={[styles.square, { backgroundColor: lib[5] }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={[styles.square, { backgroundColor: lib[5] }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={[styles.square, { backgroundColor: lib[5] }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={[styles.square, { backgroundColor: lib[3] }]} />
          </TouchableOpacity>
        </View>
        <View style={styles.squareContainer}>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
        </View>
        <View style={styles.squareContainer}>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
        </View>
        <View style={styles.squareContainer}>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handleClick()}>
            <View style={styles.square} />
          </TouchableOpacity>
        </View>
        {this.state.clicked && (
          <View>
            <Text>On February 28, you rated the day a 5!</Text>
            <Text>Smile</Text>
            <Text>You felt these emotions:</Text>
            <View>
              <Text>Ecstatic</Text>
              <Text>Loved</Text>
              <Text>Courageous</Text>
            </View>
            <TouchableOpacity onPress={() => this._viewJournal(1)}>
              <Text>View Journal Entry</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    marginTop: "67rem"
  },
  squareContainer: {
    flexDirection: "row"
  },
  square: {
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
    width: "27rem",
    height: "27rem"
  }
})

export default MonthlySummary
