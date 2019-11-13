const jwt = require('jsonwebtoken')
module.exports = getToken;

function getToken(username) {
    const payload = {
        username,
        department: 'computer science'
    }

    const secret = process.env.JWT_SECRET || 'vuzEXD722GU1g93gri55';

    const options = {
        expiresIn: "1hr"
    }
    
    return jwt.sign(payload, secret, options)
}