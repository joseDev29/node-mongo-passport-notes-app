const { connect } = require("mongoose");
const config = require("../config");

connect(config.db.mongodb.uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log("----- Mongo DB connected");
});
