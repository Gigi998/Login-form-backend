const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

// mongoose automatically looks for lower case plural version in db in our case employees
module.exports = mongoose.model("Employee", employeeSchema);
