const bcrypt = require("bcrypt");
const crypto = require('crypto');
const uti = require('../util/lib');
const user = require('../models/user');

profile = async (req, res) => {
    const {id, first_name, bio, last_name, birth , gender, intrest} = req.body;
    let data = {
        isValid: true,
        errUsername: null,
        errEmail: null,
    };
    user.updateUser([first_name], [last_name], [bio], [birth],[gender], [intrest], [id])
    .then((response) => {
        console.log("updated")
          res.send(response);
    }).catch((error) => {
          console.log(error);
      }); 
};
module.exports = profile;