const db = require('./db-config')
module.exports = {
    find,
    addUser,
    findUser,
}

function find() {
    return db('users').select('id', 'username', 'department')
}

function addUser(user) {
    return db('users').insert(user)
}

function findUser(username) {
    return db('users').select('id', 'username', 'department')
    .first()
    .where('username', username)
}