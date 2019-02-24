const mongoose = require("mongoose")

const journalSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      require: true
    },
    emotions: [{ type: String, required: true }],
    feelingToday: {
      type: String,
      required: true
    },
    thankful: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Journal", journalSchema)
