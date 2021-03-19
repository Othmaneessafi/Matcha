const isEmpty = require('../empty/isEmpty')

const isOrient = (interest) => {

    if(isEmpty(interest))
        return false
    if(interest !== 'men' && interest !== 'women' && interest !== 'both')
        return false
    return true
}

module.exports = isOrient