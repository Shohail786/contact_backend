const mongoose = require("mongoose");

const Contact = mongoose.Schema({
  name: {
    type: String,
    required: [true, "contact name"],
  },
  email: {
    type: String,
    required: [true, "contact email"],
  },
  phone: {
    type: String,
    required: [true, "contact phone"],
  },
});

module.exports = mongoose.model("Contact", Contact);
