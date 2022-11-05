const mongoose = require("mongoose");

const InspectorSchema = mongoose.Schema({
  inspectorID: { type: String },
  inspectorName: { type: String },
  inspectorContactNo: { type: String },
  inspectorDeport: { type: String },
  inspectorRoute: { type: String },
});

const Inspector = mongoose.model("inspector", InspectorSchema);

module.exports = Inspector;
