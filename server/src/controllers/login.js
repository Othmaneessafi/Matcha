const bcrypt = require("bcrypt");
const user = require('../models/user');

// const verifyJWT = (req, res, next) =>{
//     const token = req.headers["x-access-token"]

//     if(!token) {
//         res.send("Yo, we need a token, please give it to us next time!")
//     } else {
//     jwt.verify(token, "jwtSecret", (err, decoded) => {
//         if(err){
//             res.json({auth:false, message:" You failed to authenticate"});
//         } else {
//             req.userId = decoded.id;
//             next();
//         }
//     })
//     }
// }

// app.get('/isUserAuth', verifyJWT ,(req, res) =>{
//     res.send("yo, u are authenticated Congrats!")
// })

// app.get('/login', (req, res) => {
//     if(req.session.user) {
//         res.send({loggedIn: true, user: req.session.user})
//     } else {
//         res.send({ loggedIn: false })
//     }
// })

Login = async (req, res) => {
    const { username, password } = req.body;
    let dataUser = await user.getUser('GetUserByUsername', username);
    if (dataUser) {
        let profilePic = await user.select('GetProfilePic', dataUser.id);
        bcrypt.compare(password, dataUser.password)
            .then((response) => {
                if (response) {
                    if (dataUser.verif === 1) {
                        user.update('UpdateOnline', [dataUser.id])
                        dataUser.Online = 1;
                        delete dataUser.vfToken;
                        delete dataUser.password;
                        if (profilePic.length > 0)
                            dataUser.profilePic = profilePic[0].path;
                        res.send({ isValid: true, user: dataUser });
                    }
                    else
                        res.send({ isValid: false, errorField: 'Please confirm your e-mail' });
                }
                else {
                    res.send({ isValid: false, errorField: 'Sorry, your password was incorrect. Please double-check your password.' });

                }
            })
            .catch(err => console.log(err))
    }
    else
        res.send({ isValid: false, errorField: "The username you entered doesn't belong to an account. Please check your username and try again." });

}

module.exports = Login;
