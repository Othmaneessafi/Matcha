const user = require('../models/user');
const crypto = require('crypto');

confirmToken = async (req, res) => {

    const token = req.body.token;
    user.getUser('GetUserByToken', token)
        .then((response) => {
            if (response) {
                const token = crypto.randomBytes(64).toString('hex');
                user.Updattoken(response.email, token);
                user.verif(response.email);
                res.send('success');
            }
            else
                res.send('error');
        }).catch((error) => {
            console.log(error);
        });
};

module.exports = confirmToken;