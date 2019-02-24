import React from "react"
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  AsyncStorage
} from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import axios from "axios"

class LoginGid extends React.Component {
  state = {
    username: "",
    password: ""
  }
  _login = () => {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      return Alert.alert("Please fill in the fields")
    }
    axios
      .post("https://b408eea6.ngrok.io/api/signin", {
        username: this.state.username,
        password: this.state.password
      })
      .then(value => {
        Alert.alert(value.data.token)
        AsyncStorage.setItem("userToken", value.data.token).then(() => {})
        this.props.navigation.navigate("App")
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>Regards</Text>
        <View style={styles.inputs}>
          <TextInput
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
            maxLength={40}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            secureTextEntry={true}
            maxLength={40}
          />
        </View>
        <TouchableOpacity onPress={this._login}>
          <Text style={styles.register}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center"
  },
  bigText: {
    fontSize: "50rem",
    marginBottom: "50rem"
  },
  register: {
    fontSize: "24rem"
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

export default LoginGid
