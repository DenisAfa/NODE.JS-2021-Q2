const { v4: uuid } = require('uuid');

/**
 * User
 * @typedef {Object} User
 * @property {string} id - user id
 * @property {string} name - user name
 * @property {string} login - user login
 * @property {string} password - user password
 */
class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
