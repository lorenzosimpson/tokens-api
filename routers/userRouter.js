const router = require('express').Router()
const db = require('../data/helpers')


router.get('/', (req, res) => {
    db.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({ error: 'Could not get users' }))
})







module.exports = router;