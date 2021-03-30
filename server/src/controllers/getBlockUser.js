const user = require('../models/user');
const img = require('../models/pics');
getBlockUser = async (req, res) => {
    const user_id = req.body.id;
     const users = await user.select('getBlockUser',user_id);
    res.send(users);
};
module.exports = getBlockUser;