import AppStack from "./screens/AppStack"
import AuthStack from "./screens/AuthStack"
import AuthLoadingScreen from "./screens/AuthLoadingScreen"
import { createAppContainer, createSwitchNavigator } from "react-navigation"

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      // change later
      initialRouteName: "AuthLoading"
    }
  )
)
