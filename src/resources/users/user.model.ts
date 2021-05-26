import { v4 as uuid } from 'uuid';

/**
 * User
 * @typedef {Object} User
 * @property {string} id - user id
 * @property {string} name - user name
 * @property {string} login - user login
 * @property {string} password - user password
 */

interface User {
  id: string;
  name: string;
  login: string;
  password: string;
}

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

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export { User };