const bcrypt = require("bcrypt");
const crypto = require('crypto');
const uti = require('../util/lib');
const user = require('../models/user');
const sendmail = require('./sendmail');
const saltRounds = 10;

Register = async (req, res) => {
    const {username, email, password, confirmPassword} = req.body;
    let GetUserByUsername = await user.getUser('GetUserByUsername', username);
    let GetUserByEmail = await user.getUser('GetUserByEmail', email);
    let data = {
        isValid: true,
        errUsername: null,
        errEmail: null,
    };
    if (GetUserByEmail) {
        data.errEmail = 'Email already exists';
    }
    if (GetUserByUsername) {
        data.errUsername = 'Username already exists';
    }
    if (!uti.isUsername(username) || !uti.isEmail(email) || GetUserByEmail || GetUserByUsername || !uti.isPassword(password, confirmPassword)) {
        data.isValid = false;
    }
    else {
        let hashPassword = await bcrypt.hash(password, saltRounds);
        const token = crypto.randomBytes(64).toString('hex');
        user.Register(username, email, hashPassword);
        user.Updattoken(email, token);
        sendmail.sendEmail(email, token);
    }
    res.send(data);
};
module.exports = Register;