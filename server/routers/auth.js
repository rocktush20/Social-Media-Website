const middleAuth = require("../middlewares/authmiddle");
const {loginController, signupController} = require("../controllers/auth");
const router = require("express").Router();

router.post("/login",middleAuth,loginController);
router.post("/signup",middleAuth,signupController);

module.exports = router;