const express = require("express");
const app = express();

const mongoDB = require("./config/connectMongo.js");

require("dotenv").config();
const port = process.env.PORT || 5006;

mongoDB();
// // inbuilt middleware to the parse the stream of data that is
// // recieved from client on the server side
app.use(express.json());
const contact = require("./routes/contactRouter");
app.use("/contact", contact);

app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
});
