const express = require("express");
const router = express();
const userController = require("../controller/userController");

router.post("/signup", userController.signup);
router.get("/login", userController.login);
router.get("/getUser/:id", userController.getUser);
router.post("/postBlog", userController.postBlog);
router.get("/getBlog/:userId", userController.getBlog);

module.exports = router;
