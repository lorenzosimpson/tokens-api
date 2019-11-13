const router = require('express').Router();
const bcrypt = require('bcryptjs');


const db = require('../data/helpers')
const validateUser = require('../middleware/validateUser')

router.post('/', (req, res) => {
    let user = req.body;
    const validateResult = validateUser(user)

    if (validateResult.isSuccessful === true) {
        const hash = bcrypt.hashSync(user.password, 8);
        user.password = hash;

        db.addUser(user)
        .then(added => res.status(201).json(added))
        .catch(err => res.status(500).json({ error: 'Could not add user' }))

    } else {
        res.status(400).json({
          message: "Invalid information about the user, see errors for details",
          errors: validateResult.errors
        });
      }

})

module.exports = router;