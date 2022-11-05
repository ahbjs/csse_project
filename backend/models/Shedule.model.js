const mongoose = require("mongoose");

const SheduleSchema = mongoose.Schema({
  routeNo: { type: String },
  time: { type: String },
  start: { type: String },
  end: { type: String },
  driverID: { type: String },
  busNo: { type: String },
  date: { type: String },
});

const SheduleModel = mongoose.model("shedule", SheduleSchema);

module.exports = SheduleModel;
