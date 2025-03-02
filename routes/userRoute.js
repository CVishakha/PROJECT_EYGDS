const express = require("express");
const router = express.Router();

// Example POST route
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  res.status(201).json({ message: "User registered successfully!" });
});

module.exports = router;

// const express = require("express");
// const {
//   loginController,
//   registerController,
// } = require("../controllers/userController");

// // router object
// const router = express.Router();

// // routers
// // POST || LOGIN USER
// router.post("/login", loginController);

// // POST || REGISTER USER
// router.post("/register", registerController);

// module.exports = router;
