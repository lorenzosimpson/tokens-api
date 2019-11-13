const router = require('express').Router()
const userRouter = require('./userRouter')
const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter')


router.use('/users', userRouter)
router.use('/register', registerRouter)
router.use('/login', loginRouter)







router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hi from the API!'})
})



module.exports = router;