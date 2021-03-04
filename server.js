const express = require("express");
const routes = require("./routes");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API and view routes
app.use(routes);

// Start the API server
db.sequelize.sync({force:true}).then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});