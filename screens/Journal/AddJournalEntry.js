import React from "react"
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  AsyncStorage
} from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { CheckBox } from "react-native-elements"
import axios from "axios"

class AddJournalEntry extends React.Component {
  state = {
    firstVisible: false,
    secondVisible: false,
    thirdVisible: false,
    fourthVisible: false,
    fifthVisible: false,
    selection: true,
    anxious: false,
    sad: false,
    stressed: false,
    envious: false,
    doubtful: false,
    depressed: false,
    meh: false,
    alright: false,
    good: false,
    ecstatic: false,
    elated: false,
    loved: false,
    faithful: false,
    happy: false,
    satisfied: false,
    rating: "",
    feel: "",
    grateful: "",
    feelShow: false,
    gratefulShow: false,
    text: "",
    remaining: [],
    user: {}
  }

  _setText = () => {
    const {
      anxious,
      sad,
      stressed,
      envious,
      doubtful,
      depressed,
      meh,
      alright,
      good,
      ecstatic,
      elated,
      loved,
      faithful,
      happy,
      satisfied
    } = this.state

    const values = [
      {
        value: anxious,
        exact: "anxious"
      },
      { value: sad, exact: "sad" },
      { value: stressed, exact: "stressed" },
      { value: envious, exact: "envious" },
      { value: doubtful, exact: "doubtful" },
      { value: depressed, exact: "depressed" },
      { value: meh, exact: "meh" },
      { value: alright, exact: "alright" },
      { value: good, exact: "good" },
      { value: ecstatic, exact: "ecstatic" },
      { value: elated, exact: "elated" },
      { value: loved, exact: "loved" },
      { value: faithful, exact: "faithful" },
      { value: happy, exact: "happy" },
      { value: satisfied, exact: "satisfied" }
    ]

    const remaining = values.filter(el => el.value)
    const obj = [
      {
        value: this.state.firstVisible,
        name: 1
      },
      { value: this.state.secondVisible, name: 2 },
      { value: this.state.thirdVisible, name: 3 },
      { value: this.state.fourthVisible, name: 4 },
      { value: this.state.fifthVisible, name: 5 }
    ]

    const answer = obj.filter(el => el.value)

    this.setState({
      text: `I feel ${remaining.map(el => el.exact).join(" ")} ${
        answer[0].name
      }`,
      rating: answer[0].name,
      remaining: remaining.map(el => el.exact)
    })
    this.setState({
      firstVisible: false,
      secondVisible: false,
      thirdVisible: false,
      fourthVisible: false,
      fifthVisible: false,
      selection: false,
      feelShow: true
    })
  }

  _submit = async () => {
    const data = await AsyncStorage.getItem("userToken")
    axios
      .post(
        "https://b408eea6.ngrok.io/api/new/entry",
        {
          rating: Number(this.state.rating),
          emotions: this.state.remaining,
          feelingToday: this.state.feel,
          thankful: this.state.grateful
        },
        {
          headers: {
            Authorization: data
          }
        }
      )
      .then(value => {
        this.props.navigation.navigate("Home")
        // this.setState({ user: value.data })
      })
  }
  async componentDidMount() {
    const data = await AsyncStorage.getItem("userToken")
    axios
      .get("https://b408eea6.ngrok.io/api/me", {
        headers: {
          Authorization: data
        }
      })
      .then(value => {
        this.setState({ user: value.data })
      })
  }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.header}>
          Good evening, {this.state.user && this.state.user.username}!
        </Text>
        <Text style={styles.subHeader}>How are you feeling today?</Text>
        <View style={styles.box}>
          <Text>February 28, 2019</Text>
          <View style={styles.emotions}>
            <Text>How was your day?</Text>
            {this.state.selection && (
              <View style={styles.sameemo}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState(prevState => ({
                      firstVisible: true,
                      secondVisible: false,
                      thirdVisible: false,
                      fourthVisible: false,
                      fifthVisible: false,
                      anxious: false,
                      sad: false,
                      stressed: false,
                      envious: false,
                      doubtful: false,
                      depressed: false,
                      meh: false,
                      alright: false,
                      good: false,
                      ecstatic: false,
                      elated: false,
                      loved: false,
                      faithful: false,
                      happy: false,
                      satisfied: false
                    }))
                  }
                  style={styles.right10}
                >
                  <Image source={require("./1.png")} style={styles.image} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState(prevState => ({
                      firstVisible: false,
                      secondVisible: true,
                      thirdVisible: false,
                      fourthVisible: false,
                      fifthVisible: false,
                      anxious: false,
                      sad: false,
                      stressed: false,
                      envious: false,
                      doubtful: false,
                      depressed: false,
                      meh: false,
                      alright: false,
                      good: false,
                      ecstatic: false,
                      elated: false,
                      loved: false,
                      faithful: false,
                      happy: false,
                      satisfied: false
                    }))
                  }
                  style={styles.right10}
                >
                  <Image source={require("./2.png")} style={styles.image} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState(prevState => ({
                      firstVisible: false,
                      secondVisible: false,
                      thirdVisible: true,
                      fourthVisible: false,
                      fifthVisible: false,
                      anxious: false,
                      sad: false,
                      stressed: false,
                      envious: false,
                      doubtful: false,
                      depressed: false,
                      meh: false,
                      alright: false,
                      good: false,
                      ecstatic: false,
                      elated: false,
                      loved: false,
                      faithful: false,
                      happy: false,
                      satisfied: false
                    }))
                  }
                  style={styles.right10}
                >
                  <Image source={require("./3.png")} style={styles.image} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState(prevState => ({
                      firstVisible: false,
                      secondVisible: false,
                      thirdVisible: false,
                      fourthVisible: true,
                      fifthVisible: false,
                      anxious: false,
                      sad: false,
                      stressed: false,
                      envious: false,
                      doubtful: false,
                      depressed: false,
                      meh: false,
                      alright: false,
                      good: false,
                      ecstatic: false,
                      elated: false,
                      loved: false,
                      faithful: false,
                      happy: false,
                      satisfied: false
                    }))
                  }
                  style={styles.right10}
                >
                  <Image source={require("./4.png")} style={styles.image} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState(prevState => ({
                      firstVisible: false,
                      secondVisible: false,
                      thirdVisible: false,
                      fourthVisible: false,
                      fifthVisible: true,
                      anxious: false,
                      sad: false,
                      stressed: false,
                      envious: false,
                      doubtful: false,
                      depressed: false,
                      meh: false,
                      alright: false,
                      good: false,
                      ecstatic: false,
                      elated: false,
                      loved: false,
                      faithful: false,
                      happy: false,
                      satisfied: false
                    }))
                  }
                  style={styles.right10}
                >
                  <Image source={require("./5.png")} style={styles.image} />
                </TouchableWithoutFeedback>
              </View>
            )}
          </View>
          {this.state.firstVisible && (
            <View style={styles.innerBox}>
              <Image source={require("./1.png")} style={styles.image} />
              <Text>Pick or add up to three emotions</Text>
              <View>
                <CheckBox
                  title="Anxious"
                  checked={this.state.anxious}
                  onPress={() =>
                    this.setState({
                      anxious: !this.state.anxious
                    })
                  }
                />
                <CheckBox
                  title="Sad"
                  checked={this.state.sad}
                  onPress={() =>
                    this.setState({
                      sad: !this.state.sad
                    })
                  }
                />
                <CheckBox
                  title="Stressed"
                  checked={this.state.stressed}
                  onPress={() =>
                    this.setState({
                      stressed: !this.state.stressed
                    })
                  }
                />
              </View>
            </View>
          )}
          {this.state.secondVisible && (
            <View style={styles.innerBox}>
              <Image source={require("./2.png")} style={styles.image} />
              <Text>Pick or add up to three emotions</Text>
              <View>
                <CheckBox
                  title="Envious"
                  checked={this.state.envious}
                  onPress={() =>
                    this.setState({
                      envious: !this.state.envious
                    })
                  }
                />
                <CheckBox
                  title="Doubtful"
                  checked={this.state.doubtful}
                  onPress={() =>
                    this.setState({
                      doubtful: !this.state.doubtful
                    })
                  }
                />
                <CheckBox
                  title="Depressed"
                  checked={this.state.depressed}
                  onPress={() =>
                    this.setState({
                      depressed: !this.state.depressed
                    })
                  }
                />
              </View>
            </View>
          )}
          {this.state.thirdVisible && (
            <View style={styles.innerBox}>
              <Image source={require("./3.png")} style={styles.image} />
              <Text>Pick or add up to three emotions</Text>
              <View>
                <CheckBox
                  title="Meh"
                  checked={this.state.meh}
                  onPress={() =>
                    this.setState({
                      meh: !this.state.meh
                    })
                  }
                />
                <CheckBox
                  title="Alright"
                  checked={this.state.alright}
                  onPress={() =>
                    this.setState({
                      alright: !this.state.alright
                    })
                  }
                />

                <CheckBox
                  title="Good"
                  checked={this.state.good}
                  onPress={() =>
                    this.setState({
                      good: !this.state.good
                    })
                  }
                />
              </View>
            </View>
          )}
          {this.state.fourthVisible && (
            <View style={styles.innerBox}>
              <Image source={require("./4.png")} style={styles.image} />
              <Text>Pick or add up to three emotions</Text>
              <View>
                <CheckBox
                  title="ecstatic"
                  checked={this.state.ecstatic}
                  onPress={() =>
                    this.setState({
                      ecstatic: !this.state.ecstatic
                    })
                  }
                />
                <CheckBox
                  title="Elated"
                  checked={this.state.elated}
                  onPress={() =>
                    this.setState({
                      elated: !this.state.elated
                    })
                  }
                />

                <CheckBox
                  title="Loved"
                  checked={this.state.loved}
                  onPress={() =>
                    this.setState({
                      loved: !this.state.loved
                    })
                  }
                />
              </View>
            </View>
          )}
          {this.state.fifthVisible && (
            <View style={styles.innerBox}>
              <Image source={require("./5.png")} style={styles.image} />
              <Text>Pick or add up to three emotions</Text>
              <View>
                <CheckBox
                  title="Faithful"
                  checked={this.state.faithful}
                  onPress={() =>
                    this.setState({
                      faithful: !this.state.faithful
                    })
                  }
                />
                <CheckBox
                  title="Happy"
                  checked={this.state.happy}
                  onPress={() =>
                    this.setState({
                      happy: !this.state.happy
                    })
                  }
                />

                <CheckBox
                  title="Satisfied"
                  checked={this.state.satisfied}
                  onPress={() =>
                    this.setState({
                      satisfied: !this.state.satisfied
                    })
                  }
                />
              </View>
            </View>
          )}
          {!this.state.feelShow && (
            <View>
              <TouchableWithoutFeedback onPress={this._setText}>
                <Text>Done</Text>
              </TouchableWithoutFeedback>
            </View>
          )}

          {(this.state.feelShow || this.state.gratefulShow) && (
            <Text>{this.state.text}</Text>
          )}

          {this.state.feelShow && (
            <View style={styles.inputs}>
              <TextInput
                onChangeText={text => this.setState({ feel: text })}
                value={this.state.feel}
                maxLength={40}
                multiline={true}
              />
            </View>
          )}

          {this.state.feelShow && (
            <View style={styles.inputs}>
              <TextInput
                onChangeText={text => this.setState({ grateful: text })}
                value={this.state.grateful}
                maxLength={40}
                multiline={true}
              />
            </View>
          )}

          {this.state.feelShow && (
            <View>
              <TouchableWithoutFeedback onPress={this._submit}>
                <Text>Submit</Text>
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "70rem",
    paddingHorizontal: "16rem"
  },
  header: {
    fontSize: "24rem"
  },
  subHeader: {
    fontSize: "16rem"
  },
  box: {
    paddingLeft: "16rem",
    paddingTop: "16rem",
    backgroundColor: "#C4C4C4",
    height: "280rem",
    borderRadius: "20rem"
  },
  image: {
    height: "30rem",
    width: "30rem"
  },
  emotions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  sameemo: {
    flexDirection: "row"
  },
  right10: {
    marginRight: "10rem"
  },
  innerBox: {
    width: "312rem",
    height: "149rem"
  },
  inputs: {
    width: "176rem",
    height: "32rem",
    backgroundColor: "white",
    paddingLeft: "8rem",
    marginBottom: "16rem",
    borderRadius: "10rem"
  }
})

export default AddJournalEntry
