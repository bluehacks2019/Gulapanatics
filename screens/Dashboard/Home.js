import React from "react"
import { Ionicons } from "@expo/vector-icons"
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Modal,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import DatePicker from "../../components/DatePicker"
import Profile from "../../components/Profile"
import axios from "axios"
import { NavigationEvents } from "react-navigation"

const lib = {
  1: "#ff8282",
  2: "#ff9e82",
  3: "#ffdf82",
  4: "#beff82",
  5: "#82ff82"
}
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Profile navigation={navigation} />
    }
  }

  state = {
    visible: false,
    firstDate: "",
    secondDate: "",
    user: {
      privacySettings: {
        journal: true,
        emotion: true
      },
      journals: [],
      friends: [],
      _id: "5c71fdf9f461d206d34e2d8c",
      username: "tomy"
    }
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

  _changeCalendar = visible => {
    this.setState({
      visible
    })
  }
  _addEntry = () => {
    this.props.navigation.navigate("AddJournalEntry")
  }
  _reviewEmotions = () => {
    this.props.navigation.navigate("Summary")
  }
  render() {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)

    const curr = today.toISOString().slice(0, 10)
    const currOne = tomorrow.toISOString().slice(0, 10)
    return (
      // Compopnent
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={async () => {
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
          }}
        />

        <View style={styles.storyBar}>
          <View
            style={{
              flex: 3,
              justifyContent: "center"
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5
              }}
            >
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnail}
                  source={require("./papa.png")}
                />
                <Text style={styles.thumbnailText}>name</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.filter}>
            <TouchableOpacity onPress={() => this._changeCalendar(true)}>
              <View style={styles.filterContainer}>
                <Text style={styles.filterText}>Filter</Text>
                <View style={styles.filterCircle} />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text>
              Good evening, {this.state.user && this.state.user.username}
            </Text>
            <View style={styles.reviewEmotions}>
              <Text>You haven't added your journal entry for today</Text>
              <Button onPress={this._addEntry} title="Add Entry" />
            </View>
          </View>
          <View style={styles.reviewEmotions}>
            <Text style={styles.reviewEmotionsText}>
              See your past emotions in pixels
            </Text>
            <Button onPress={this._reviewEmotions} title="Review Emotions" />
          </View>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.visible}
            onRequestClose={() => {
              Alert.alert("Date range applied")
            }}
          >
            <DatePicker
              initialRange={[curr, currOne]}
              onSuccess={(s, e) => {
                this._changeCalendar(false)
                this.setState({
                  firstDate: s,
                  secondDate: e
                })
              }}
            />
          </Modal>
          <View style={styles.journalEntries}>
            <Text>Journal Entries:</Text>
            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* Component Here */}
                {this.state.user.journals.length > 0 &&
                  this.state.user.journals.map(el => {
                    return (
                      <View style={styles.journalEntryContainer} key={el.id}>
                        <Text>{el.createdAt}</Text>
                        <View
                          style={[
                            styles.journalEntryIndicator,
                            { backgroundColor: lib[el.rating] }
                          ]}
                        />
                      </View>
                    )
                  })}
                {/* <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View>
                <View style={styles.journalEntryContainer}>
                  <Text>Date Here</Text>
                  <View style={styles.journalEntryIndicator} />
                </View> */}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1
  },
  storyBar: {
    height: "100rem",
    paddingLeft: "16rem"
  },
  thumbnail: {
    borderRadius: "25rem",
    width: "50rem",
    height: "50rem",
    borderWidth: 2,
    borderColor: "pink"
  },
  thumbnailContainer: {
    alignItems: "center",
    marginRight: "16rem"
  },
  thumbnailText: {
    fontSize: "10rem"
  },
  filter: {
    alignItems: "flex-end"
  },
  filterContainer: {
    backgroundColor: "#c4c4c4",
    flexDirection: "row",
    paddingLeft: "16rem",
    paddingRight: "8rem",
    borderRadius: "10rem",
    alignItems: "center"
  },
  filterText: {
    fontSize: "14rem",
    marginRight: "16rem"
  },
  filterCircle: {
    width: "9rem",
    height: "9rem",
    borderRadius: "4.5rem",
    backgroundColor: "#A4A4A4"
  },
  main: {
    flex: 1,
    paddingHorizontal: "15rem"
  },
  alignRight: {
    alignItems: "flex-end",
    marginRight: "20rem"
  },
  entryAdd: {
    height: "46rem",
    width: "192rem",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    borderRadius: "20rem",
    justifyContent: "center"
  },
  entryAddText: {
    fontSize: "28rem"
  },
  buggy: {
    height: "20rem"
  },
  reviewEmotions: {
    marginBottom: "40rem"
  },
  reviewEmotionsText: {
    textAlign: "center"
  },
  reviewEmotionsButton: {
    width: "155rem",
    height: "30rem",
    justifyContent: "center"
  },
  journalEntryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "36rem",
    backgroundColor: "#ccc",
    paddingHorizontal: "10rem",
    borderRadius: 10,
    marginTop: "6rem"
  },
  journalEntryIndicator: {
    width: "24rem",
    height: "24rem",
    backgroundColor: "green",
    borderRadius: "12rem"
  },
  journalEntries: {
    marginTop: "20rem",
    flex: 1
  },
  datePicker: {
    position: "absolute"
  }
})

export default HomeScreen
