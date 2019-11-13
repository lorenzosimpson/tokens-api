const db = require('./db-config')
module.exports = {
    find,
    addUser,
}

function find() {
    return db('users').select('id', 'username', 'department')
}

function addUser(user) {
    return db('users').insert(user)
}