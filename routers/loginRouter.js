const router = require('express').Router()
const db = require('../data/helpers')
const bcrypt = require('bcryptjs');
const getToken = require('../utils/getToken')


router.post('/', (req, res) => {
    const { username, password } = req.body;

    db.findUser(username)
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = getToken(user.username);
            res.status(200).json({message: `Welcome ${user.username}! have a token...`, token});
        } else {
            res.status(401).json({ error: 'Invalid credentials'})
        }
    })
    .catch(err => res.status(500).json({ error: 'Could not log in' }))
})

module.exports = router;