const { Router } = require("express")
const userController = require("./controllers/userController")
const authController = require("./controllers/authController")

const router = Router()

router.post("/signin", authController.signin)
router.post("/signup", authController.signUp)

router.get("/user", authController.checkIfUserExists, userController.getUser)

router.get("/me", authController.checkIfUserExists, userController.getMe)
router.get(
  "/nonfriends",
  authController.checkIfUserExists,
  userController.getNonFriends
)

router.get(
  "/friends",
  authController.checkIfUserExists,
  userController.getFriends
)

router.post(
  "/new/entry",
  authController.checkIfUserExists,
  userController.createEntry
)

router.post(
  "/new/friend",
  authController.checkIfUserExists,
  userController.newFriend
)

router.get(
  "/get/yearly",
  authController.checkIfUserExists,
  userController.getJournalYearly
)

router.get(
  "/get/monthly",
  authController.checkIfUserExists,
  userController.getJournalMonthly
)

router.get(
  "/get/weekly",
  authController.checkIfUserExists,
  userController.getJournalWeekly
)

module.exports = router
