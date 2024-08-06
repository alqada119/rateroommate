const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const roommate = require("./routes/roommaterouter");
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.port || 3001;

app.use("/roommate",roommate);
app.listen(port , () => {
  console.log("Listening to port",port);
});