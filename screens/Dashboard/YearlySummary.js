import React from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import EStyleSheet from "react-native-extended-stylesheet"

const lib = {
  1: "#ff8282",
  2: "#ff9e82",
  3: "#ffdf82",
  4: "#beff82",
  5: "#82ff82"
}

class YearlySummary extends React.Component {
  static navigationOptions = {
    title: "Yearly Summary"
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Here are your emotions per week:</Text>
        <Text>Current Week</Text>
        {/* Add chevron */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.squareContainer}>
            <Text style={styles.day}>1</Text>
            <Text style={styles.day}>2</Text>
            <Text style={styles.day}>3</Text>
            <Text style={styles.day}>4</Text>
            <Text style={styles.day}>5</Text>
            <Text style={styles.day}>6</Text>
            <Text style={styles.day}>7</Text>
            <Text style={styles.day}>8</Text>
            <Text style={styles.day}>9</Text>
            <Text style={styles.day}>10</Text>
            <Text style={styles.day}>11</Text>
            <Text style={styles.day}>12</Text>
            <Text style={styles.day}>13</Text>
            <Text style={styles.day}>14</Text>
            <Text style={styles.day}>15</Text>
            <Text style={styles.day}>16</Text>
            <Text style={styles.day}>17</Text>
            <Text style={styles.day}>18</Text>
            <Text style={styles.day}>19</Text>
            <Text style={styles.day}>20</Text>
            <Text style={styles.day}>21</Text>
            <Text style={styles.day}>22</Text>
            <Text style={styles.day}>23</Text>
            <Text style={styles.day}>24</Text>
            <Text style={styles.day}>25</Text>
            <Text style={styles.day}>26</Text>
            <Text style={styles.day}>27</Text>
            <Text style={styles.day}>28</Text>
            <Text style={styles.day}>29</Text>
            <Text style={styles.day}>30</Text>
            <Text style={styles.day}>31</Text>
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
          <View style={styles.squareContainer}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  day: {
    fontSize: "7rem",
    marginRight: "5rem"
  },
  squareContainer: {},
  square: {
    backgroundColor: "#82ff82",
    borderColor: "black",
    borderWidth: 1,
    width: "12rem",
    height: "12rem"
  }
})

export default YearlySummary
