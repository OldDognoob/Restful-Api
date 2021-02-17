// import the packages
const express = require("express");
//executed
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");


require('dotenv/config');


//Import Routes
const postsRoute = require('./routes/posts');

//middleware
app.use(cors());
app.use('/posts',postsRoute);
// parse application/json
app.use(bodyParser.json());


//Middlewares
// app.use('/posts', () => {
//     console.log('Maria runs in a middleware marathon')
// })

//Create Routes
app.get("/", (req, res) => {
  res.send("We are back");
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("connected to DB!") 
);

// Start the server
app.listen(3000);
