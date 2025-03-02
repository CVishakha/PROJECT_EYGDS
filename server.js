// import express from "express";
// // const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const connectDb = require("./config/connectDB.js");
// const path = require("path");

// // Load environment variables
// dotenv.config();

// // Initialize Express App
// const app = express();

// // Middleware
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// connectDb()
//   .then(() => {
//     console.log("✅ MongoDB Connected Successfully".green.bold);

//     // Define Routes
//     app.use("/api/v1/users", require("./routes/userRoute"));
//     app.use("/api/v1/transactions", require("./routes/transactionRoute"));

//     // Serve Static Files for Frontend
//     app.use(express.static(path.join(__dirname, "./client/dist")));

//     // Catch-All Route for React Frontend
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "./client/dist/index.html"));
//     });

//     // Set Port
//     const PORT = process.env.PORT || 8080;

//     // Start Server
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`.cyan.bold);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Failed:".red.bold, err);
//     process.exit(1); // Exit process on database connection failure
//   });


// import express from "express";
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const connectDb = require("./config/connectDB.js");
// const path = require("path");

// // config dot env file
// dotenv.config();

// //database call
// connectDb();

// // rest object
// const app = express();

// //middlewares
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(cors());

// // routes
// //user routes
// app.use("/api/v1/users", require("./routes/userRoute"));
// //transaction routes
// app.use("/api/v1/transactions", require("./routes/transactionRoute"));

// // static files
// app.use(express.static(path.join(__dirname, "./client/dist")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/dist/index.html"));
// });

// // port
// const PORT = 8080 || process.env.PORT;

// //listen server
// connectDb().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";

// dotenv.config(); // Load environment variables

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Welcome To Finance Management System");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Default route
app.get("/", (req, res) => {
  res.send("Welcome To Finance Management System");
});

// Sample API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
