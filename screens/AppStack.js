import HomeScreen from "./Dashboard/Home"
import SummaryScreen from "./Dashboard/Summary"
import WeeklySummaryScreen from "./Dashboard/WeeklySummary"
import MonthlySummaryScreen from "./Dashboard/MonthlySummary"
import YearlySummaryScreen from "./Dashboard/YearlySummary"
import ProfileScreen from "./Profile/Profile"
import GameSpin from "./Game/GameSpin"

import JournalScreen from "./Journal/Journal"
import JournalEntryScreen from "./Journal/JournalEntry"
import AddJournalEntryScreen from "./Journal/AddJournalEntry"

import FriendsScreen from "./Friends/Friends"

import GameScreen from "./Game/Game"
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation"

const DashboardStack = createStackNavigator({
  Home: HomeScreen,
  Summary: SummaryScreen,
  WeeklySummary: WeeklySummaryScreen,
  MonthlySummary: MonthlySummaryScreen,
  YearlySummary: YearlySummaryScreen,
  Profile: ProfileScreen
})

const JournalStack = createStackNavigator({
  AddJournalEntry: AddJournalEntryScreen,
  JournalEntry: JournalEntryScreen
})

const GameStack = createStackNavigator({
  Game: GameScreen,
  GameSpin
})

const FriendsStack = createStackNavigator({
  Friends: FriendsScreen
})

export default createBottomTabNavigator(
  {
    Dashboard: DashboardStack,
    Journal: JournalStack,
    Game: GameStack,
    Friends: FriendsStack
  },
  {}
)
