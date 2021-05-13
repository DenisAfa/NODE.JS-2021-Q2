const User = require('./user.model');

const DB = [new User({ name: 'Denis' }), new User(), new User()];

module.exports = { DB };
