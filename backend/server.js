const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//Assign into localhost ports
const PORT = process.env.PORT || 5000;

//Json Methods
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  // useCreateIndex: true,
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
});

//Mongoose Connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Successful!");
});

//route

app.use("/inspector", require("./routes/Inspector.router"));
app.use("/driver", require("./routes/Driver.router"));
app.use("/shedule", require("./routes/Shedule.route"));
app.use("/price", require("./routes/Price.router"));

//Run on port
app.listen(PORT, () => {
  console.log(`Server is up and running on port number : ${PORT}`);
});
