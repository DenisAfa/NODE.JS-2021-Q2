const User = require('./user.model');

const DB_USERS = [new User({ name: 'Denis' }), new User(), new User()];

module.exports = { DB_USERS };
