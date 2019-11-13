const router = require('express').Router();
const bcrypt = require('bcryptjs');
const getToken = require('../utils/getToken')


const db = require('../data/helpers')
const validateUser = require('../middleware/validateUser')

router.post('/', (req, res) => {
    let user = req.body;
    const validateResult = validateUser(user)

    if (validateResult.isSuccessful === true) {
        const hash = bcrypt.hashSync(user.password, 8);
        user.password = hash;

        db.addUser(user)
        .then(added => {
                const token = getToken(user.username)
                res.status(201).json({message: `Thanks for registering, ${user.username}!`, token: token})
        })
        .catch(err => res.status(500).json({ error: 'Could not add user' }))

    } else {
        res.status(400).json({
          message: "Invalid information about the user, see errors for details",
          errors: validateResult.errors
        });
      }

})

module.exports = router;