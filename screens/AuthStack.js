import LoginScreen from "./Login"
import LoginGidScreen from "./LoginGid"
import { createStackNavigator } from "react-navigation"

export default createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    LoginGid: {
      screen: LoginGidScreen
    }
  },
  {
    headerMode: "none"
  }
)
