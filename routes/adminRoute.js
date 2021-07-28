const express = require("express");
const router = express();
const adminController = require("../controller/adminController");

router.post("/signup", adminController.signup);
router.get("/login", adminController.login);

module.exports = router;
