const { connect } = require("mongoose");
const config = require("../config");

connect(config.db.mongodb.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("----- Mongo DB connected");
});
