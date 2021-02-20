const app = require("./app");

require("./db/mongodb");

app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
