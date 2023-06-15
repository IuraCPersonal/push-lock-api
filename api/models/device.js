const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  deviceStatus: { type: String, required: true },
  createdAt: new Date(0)
});

module.exports = mongoose.model("Device", deviceSchema);
