
const {check} = require("express-validator");
const {registerUser} = require("../controller/authController.jsx");
const {loginUser, verifyEmail} = require("../controller/authController.jsx");
const router = require("express").Router();

router.post('/register',[
    check("email",'please include a valid email').isEmail(),
    check("password", "password must be 5 or more characters").isLength({min: 6})
], registerUser);

router.post('/login', loginUser);
router.get('/verify-email/:token',verifyEmail)