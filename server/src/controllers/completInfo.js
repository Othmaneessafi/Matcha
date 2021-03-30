
const uti = require('../util/lib');
const user = require('../models/user');

addInfo = async (req, res) => {
    const add_info = req.body;
    let verif = false;
    if (add_info.tags.length) {
        const result = await user.checkTags(add_info.tags)
        if (result[0].n !== add_info.tags.length)
            verif = false;
        else
            verif = true;
    }
    if (add_info.tags.length > 5) {
        verif = false;
        res.send({ complet_step1: false, error: 'You can not add more than 5 Tags !' });
        return;
    }
    if(uti.date_Birthday(add_info.birth) && uti.gender(add_info.gender) && uti.Sexual_orientation(add_info.intrest) && uti.biography(add_info.bio) && verif){
        user.deleteUserTag(add_info.id);
        user.updateInfo(add_info.last_name, add_info.first_name, add_info.gender, add_info.intrest, add_info.birth, uti.age(add_info.birth), add_info.bio, add_info.id);
        add_info.tags.forEach( element => {
            user.getTagId(element)
            .then(re => {
                if(re){
                    user.insertUserTag(add_info.id, re[0].tag_id);
                }
            })
            .catch(err => {
                console.log(err);
            })
        });
        user.update('UpdateStep', [1, add_info.id]);
        const getuser = await user.getUser('GetUserById', add_info.id);
        if (getuser) delete getuser.password;
        res.send({ complet_step1: true, getuser });
    }
    else
        res.send({ complet_step1: false,  error: 'there was an error in one of the fields' });
};

module.exports = addInfo;