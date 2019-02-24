const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  image: String,
  journals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Journal" }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  privacySettings: {
    journal: { type: Boolean, default: true },
    emotion: { type: Boolean, default: true }
  }
})

module.exports = mongoose.model("User", userSchema)
