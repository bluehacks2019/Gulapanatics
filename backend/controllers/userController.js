const User = require("../models/User")
const Journal = require("../models/Journal")

exports.getNonFriends = async function(req, res) {
  const nonFriends = await User.find({}).populate("journals friends")

  toReturn = nonFriends
    .filter(el => {
      const id = req.user.id
      return el._id != id
    })
    .filter(el => {
      const friends = req.user.friends
      const separated = []

      for (let value of friends) {
        separated.push(value._id.toString())
      }
      return !separated.includes(el._id.toString())
    })

  res.json(toReturn)
}

exports.getFriends = async function(req, res) {
  const friends = await User.find({}).populate("journals friends")

  toReturn = friends
    .filter(el => {
      const id = req.user.id
      return el._id != id
    })
    .filter(el => {
      const friends = req.user.friends
      const separated = []
      for (let value of friends) {
        separated.push(value._id.toString())
      }
      return separated.includes(el._id.toString())
    })

  res.json(toReturn)
}

exports.getUser = async function(req, res) {
  const user = await User.findOne({
    username: { $regex: req.body.username, $options: "i" }
  }).populate("friends journals")

  const { password, ...restOfUser } = user
  res.json(restOfUser)
}

exports.getMe = async function(req, res) {
  const user = req.user
  console.log(user)
  res.json(user)
}
exports.newFriend = async function(req, res) {
  const user = req.user

  user.friends.push(req.body.friendId)
  await user.save()
  res.json(user)
}

exports.getJournalYearly = async function(req, res) {
  let yearly

  const firstDay = new Date(new Date().getFullYear(), 0, 2)
  const lastDay = new Date(new Date().getFullYear(), 11, 31)

  if (req.body.userId) {
    yearly = await User.findById(req.body.userId).populate("journals")

    yearly = yearly.journals.filter(el => {
      return el.createdAt >= firstDay || el.createdAt <= lastDay
    })
  } else {
    yearly = req.user.journals.filter(el => {
      return el.createdAt >= firstDay || el.createdAt <= lastDay
    })
  }

  res.json(yearly)
}

exports.getJournalMonthly = async function(req, res) {
  let monthly

  const dt = new Date()
  const month = dt.getMonth()
  const year = dt.getFullYear()
  const firstDay = new Date(dt.setDate(1))
  const lastDay = new Date(year, month + 1, 0)
  if (req.body.userId) {
    monthly = await User.findById(req.body.userId).populate("journals")

    monthly = monthly.journals.filter(el => {
      return el.createdAt >= firstDay || el.createdAt <= lastDay
    })
  } else {
    monthly = req.user.journals.filter(el => {
      return el.createdAt >= firstDay || el.createdAt <= lastDay
    })
  }

  res.json(monthly)
}

exports.getJournalWeekly = async function(req, res) {
  let weekly
  const curr = new Date() // get current date
  const first = curr.getDate() - curr.getDay() // First day is the day of the month - the day of the week
  const last = first + 6

  const firstDay = new Date(curr.setDate(first)).toUTCString()
  const lastDay = new Date(curr.setDate(last)).toUTCString()

  if (req.body.userId) {
    weekly = await User.findById(req.body.userId).populate("journals")
    console.log(firstDay)
    weekly = weekly.journals.filter(el => {
      console.log(el.createdAt)
      return el.createdAt >= firstDay || el.createdAt <= lastDay
    })
  } else {
    weekly = req.user.journals.filter(el => {
      console.log(firstDay)
      console.log(el.createdAt)
      return el.createdAt >= firstDay || el.createdAt <= lastDay
    })
  }

  console.log(weekly)
  res.json(weekly)
}

exports.createEntry = async function(req, res) {
  const newJournal = await Journal.create(req.body)
  const user = req.user

  user.journals.push(newJournal.id)
  await user.save()
  res.json(user)
}
