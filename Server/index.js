require("dotenv").config();
const app = require("./app")
const port = 443;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
