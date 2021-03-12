const bcrypt = require("bcrypt");
const user = require('../models/user');

Login = async (req, res) => {
    const { username, password } = req.body;
    let dataUser = await user.getUser('GetUserByUsername', username);
    if (dataUser) {
        bcrypt.compare(password, dataUser.password)
            .then((response) => {
                if (response) {
                    if (dataUser.verification === 1) {
                        user.update('UpdateOnline', [dataUser.id])
                        dataUser.Online = 1;
                        delete dataUser.token;
                        delete dataUser.password;
                        res.send({ isValid: true, user: dataUser });
                    }
                    else
                        res.send({ isValid: false, errorField: 'Please confirm your e-mail' });
                }
                else {
                    res.send({isValid : false, errorField : 'password no exist!'});

                }
            })
            .catch(err => console.log(err))
    }
    else
        res.send({isValid: false, errorField : "No user exists!"});

}

module.exports = Login;
