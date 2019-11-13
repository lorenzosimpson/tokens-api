const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'hi from users'})
})





module.exports = router;