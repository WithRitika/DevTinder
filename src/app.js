const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");
const { connectDB } = require("./config/database");
const User = require("./models/user");
const port = 7777;


// Work for any url we will request and it convert json to js object
app.use(express.json());

// Create a post api to add the user data into the database
// POST/Signup

app.post("/signup", async (req, res) => {
  // Creating the instance of the  User model
  const user = new User( req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user");
  }
});

// We will connect to server once the database connection established successfully.
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(port, () => {
      console.log(`App listen on port number:${port}`);
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
