const express = require("express");
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const logout = require('../controllers/logout');
const checkConfirmToken = require('../controllers/confirmToken');
const sendResetEmail = require('../controllers/sendResetEmail');
const profile = require('../controllers/profile');
const resetPassword = require('../controllers/resetPassword');
const createTag = require('../controllers/createTag');
const getTags = require('../controllers/getTags'); 


router.post('/signin', Login);
router.post('/signup', Register);
router.post('/logout', logout);
router.post('/profile', profile);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);
router.post('/getTags', getTags);
router.post('/createTag', createTag);


module.exports = router;