const express = require("express");


const router = express.Router();

// Display the dashboard page
router.get("/", (req, res) => {
  res.sendFile('dashboard.html',{root: __dirname });
});


module.exports = router;