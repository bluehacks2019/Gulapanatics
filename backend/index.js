const app = require("./app")
const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/gulapa-dev")
  .then(() => {
    console.log("connected")
  })
  .catch(() => {
    console.log("cant connect")
  })

require("./models/Journal")
require("./models/User")

app.listen(3000, function() {
  console.log("Listening on PORT 3000")
})
