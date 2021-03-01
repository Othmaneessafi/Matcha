const express = require("express");
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const logout = require('../controllers/logout');
const checkConfirmToken = require('../controllers/confirmToken');
const sendResetEmail = require('../controllers/sendResetEmail');
const resetPassword = require('../controllers/resetPassword');


router.post('/signin', Login);
router.post('/signup', Register);
router.post('/logout', logout);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);


module.exports = router;