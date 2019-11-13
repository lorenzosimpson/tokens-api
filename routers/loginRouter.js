const router = require('express').Router()
const db = require('../data/helpers')

router.post('/', (req, res) => {
    const { username } = req.body;
    db.findUser(username)
    .then(user => res.status(200).json({...user, message: `Welcome, ${username}`}))
    .catch(err => res.status(500).json({ error: 'Could not log in' }))
})

module.exports = router;