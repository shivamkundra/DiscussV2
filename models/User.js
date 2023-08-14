const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  pincode: {
    type: String,
    default: "",
  },
  dearones: [
    {
      type: String,
      default: "",
    },
  ],
});

const User = mongoose.model("user", UserSchema);
// User.createIndexes(); //prevents duplicate value
module.exports = User;
