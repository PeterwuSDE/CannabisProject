const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const app = express();
const productRoutes = require('./products/routes');
const userProfileRoutes = require('./userProfiles/routes');

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../WebApplicationFront/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening`)
})

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/userProfiles', userProfileRoutes);

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../WebApplicationFront/build/index.html'))
});


// var corsOptions = {
//   origin: "http://localhost:3000"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type: application/json
// app.use(bodyParser.json());

// // parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./database/db");
// db.sequelize.sync();

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the cannabis project!" });
// });
// require("./routes/profile.js")(app);
// require("./routes/userProfile.js")(app);
// // set port, listen for requests
// app.listen(3000, () => {
//   console.log("Server is running on port 3000.");
// });