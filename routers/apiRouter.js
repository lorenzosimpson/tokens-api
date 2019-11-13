const router = require('express').Router()
const userRouter = require('./userRouter')


router.use('/users', userRouter)







router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hi from the API!'})
})



module.exports = router;