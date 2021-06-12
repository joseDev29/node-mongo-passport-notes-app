const { Router } = require("express");
const { signIn, signUp, logOut } = require("./user.controller");

const router = Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/logout", logOut);

module.exports = router;
