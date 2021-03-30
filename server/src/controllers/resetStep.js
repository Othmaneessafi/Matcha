const user = require('../models/user');

resetStep = async (req, res) => {
    const user_id = req.body.id;
    const users = await user.update('ResetStep',[user_id]);
    res.send(users);
};
module.exports = resetStep;