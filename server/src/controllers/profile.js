const bcrypt = require("bcrypt");
const crypto = require('crypto');
const uti = require('../util/lib');
const user = require('../models/user');
const sendmail = require('./sendmail');
const saltRounds = 10;

profile = async (req, res) => {
    const {id, first_name, last_name} = req.body;
    console.log(last_name);
    // let GetUserByUsername = await user.getUser('GetUserByUsername', username);
    // let GetUserByEmail = await user.getUser('GetUserByEmail', email);
    let data = {
        isValid: true,
        errUsername: null,
        errEmail: null,
    };
   // user.updateInfos(first_name , last_name, [id])
    user.updateUser([first_name], [last_name], [id])
    .then((response) => {
          res.send(response);
          console.log("wa333")
    }).catch((error) => {
          console.log(error);
      }); 
    // if (GetUserByEmail) {
    //     data.errEmail = 'Email already exists';
    // }
    // if (GetUserByUsername) {
    //     data.errUsername = 'Username already exists';
    // }
    // if (!uti.isUsername(username) || !uti.isEmail(email) || GetUserByEmail || GetUserByUsername || !uti.isPassword(password, confirmPassword)) {
    //     data.isValid = false;
    // }
    // else {
    //     let hashPassword = await bcrypt.hash(password, saltRounds);
    //     const vfToken = crypto.randomBytes(64).toString('hex');
    //     user.Register( username, email, hashPassword);
    //     user.UpdatvfToken(email, vfToken);
    //     sendmail.sendEmail(email, vfToken);
    // }
    res.send(data);
};
module.exports = profile;