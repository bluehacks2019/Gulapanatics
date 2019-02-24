import React from "react"
import { Dimensions } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"

import AppContainer from "./Navigators"

const entireScreenWidth = Dimensions.get("window").width

EStyleSheet.build({ $rem: entireScreenWidth / 380 })

class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

export default App
