const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/attendanceSystem";
const mongoURI =
  "mongodb+srv://shivam11kundra:qwerty123456A*@cluster0.fi9flvy.mongodb.net/";
connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};
module.exports = connectToMongo;
