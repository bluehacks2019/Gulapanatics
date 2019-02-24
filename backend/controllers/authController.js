const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.signUp = async function(req, res) {
  const currUser = await User.findOne({ username: req.body.username })
  if (currUser) {
    res.json({ error: "Username is taken" })
    return
  }

  const newUser = await User.create(req.body)
  const userObj = { id: newUser.id }
  const token = jwt.sign(userObj, "secretHAHA", {
    expiresIn: "1y"
  })
  console.log({ token })
  res.json({ token: token })
}

exports.signin = async function(req, res) {
  const signedIn = await User.findOne({
    username: req.body.username,
    password: req.body.password
  })

  if (signedIn) {
    res.json({
      token: jwt.sign({ id: signedIn.id }, "secretHAHA", {
        expiresIn: "1y"
      })
    })
    return
  }

  res.json({ error: "User does not exist" })
}

exports.verifyToken = async function(req, res, next) {
  if (req.headers && req.headers.authorization) {
    console.log(req.headers.authorization)
    const { id } = jwt.verify(req.headers.authorization, "secretHAHA")
    req.userId = id
  }

  next()
}

exports.checkIfUserExists = async function(req, res, next) {
  if (!req.userId) return next()

  const user = await User.findById(req.userId).populate("friends journals")
  req.user = user
  next()
}
