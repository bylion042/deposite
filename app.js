const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const paymentRoutes = require("./routes/payment");

// Serve the donation page on the root route
app.get("/", (req, res) => {
  res.render("donation");
});

app.use("/", paymentRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
