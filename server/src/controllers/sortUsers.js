const user = require('../models/user');
const img = require('../models/pics');
const T = require('./calculateNbrTagsCommun');
const calculateDistance = require('./calculateDistance');
const checkLikes= require('./checkLikes')
const so = require('./sort');
sortUsers = async (req, res) => {
    const Da = [];
    const user_id = req.body.id;
    const methode = req.body.methode;
    const route = req.body.route;
    const indice = req.body.indice;
    const users = await user.getUsers(user_id);
    const user1 = await user.select('GetUserById',user_id);
    if(route === '/browsing')
    {
        for (var i = 0; i < users.length; i++) {
            if(user1[0].Sexual_orientation === 'men')
            {
                if(users[i].gender === 'female')
                {
                    users.splice(i, 1);
                    i--;
                }
            }
            else if(user1[0].Sexual_orientation === 'women')
            {
                if(users[i].gender === 'male')
                {
                    users.splice(i, 1);
                    i--;
                }
            }
        }
    }
    
    const cmp = indice * 20;
    for (var i = 0; i < users.length; i++) {
        users[i].distance =  calculateDistance(user1[0],users[i]);
        users[i].nbrTags = await T.calculateNbrTagsCommun(user1[0],users[i]);
    }
    SorteTabe = users.sort(so(methode));
    const Data = SorteTabe;
    for (var j = 0; j < Data.length; j++) {
        const images = await img.getPics(Data[j].id);
        const interests = await user.getUserTags(Data[j].id);
        Data[j].like = await checkLikes(user_id,Data[j].id);
        Da[j]= {
         user :  Data[j],
         images : images,
         tags: interests
        }
    }
    
   res.send(Da);
};

module.exports = sortUsers;