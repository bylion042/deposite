const express = require("express");
const router = express.Router();

// Handle donation submission
router.post("/donate", (req, res) => {
  const { amount, "custom-amount": customAmount } = req.body;

  // Determine the final donation amount (prioritize custom amount)
  const donationAmount = customAmount || amount;

  // Render the donation page with the amount
  res.render("donate", { donationAmount });
});

module.exports = router;
