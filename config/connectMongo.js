const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.db_link);
    console.log("Database is connected", connect.connection.name);
  } catch (err) {
    console.log(err);
    console.log("There is the error in database connection");
    process.exit(1);
  }
};

module.exports = mongoDB;
