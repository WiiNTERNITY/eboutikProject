const router=require('express').Router();
const authController=require("../Controllers/Auth-controller");

// authentification router
router.post("/login",authController.login);
router.post("/signup",authController.signup);
// user router

module.exports=router;