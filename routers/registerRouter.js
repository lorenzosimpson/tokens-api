const router = require('express').Router()
const db = require('../data/helpers')

router.post('/', (req, res) => {
    const user = req.body;
    db.addUser(user)
    .then(added => res.status(200).json(user))
    .catch(err => res.status(500).json({ error: 'Could not add user' }))
})

module.exports = router;