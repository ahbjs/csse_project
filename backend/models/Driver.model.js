const mongoose = require("mongoose");

const DriverSchema = mongoose.Schema({
  driverID: { type: String },
  driverName: { type: String },
  driverDoB: { type: String },
  driverNic: { type: String },
  driverContactNo: { type: String },
  driverDeport: { type: String },
  driverRoute: { type: String },
});

const Driver = mongoose.model("driver", DriverSchema);

module.exports = Driver;
