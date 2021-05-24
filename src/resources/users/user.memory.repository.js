const { users } = require('../../inMemoryDB/inMemoryDB');
const User = require('./user.model');

/**
 * Get all users
 * @returns {Promise<Array<User>>}
 */
const getAll = async () => users;

/**
 * Get user by id
 * @param {string} id - user id
 * @returns {Promise<User>}
 */
const getUser = async (id) => users.find((elemDB) => elemDB.id === id);

/**
 * Create user
 * @param {object} userInfo - new user info
 * @returns {Promise<User>}
 */
const createUser = async (userInfo) => {
  const newUser = new User({ ...userInfo });
  users.push(newUser);

  return newUser;
};

/**
 * Update user information
 * @param {string} id - user id
 * @param {object} newUserInfo - new info about user
 * @returns {Promise<User>}
 */
const updateUser = async (id, newUserInfo) => {
  let updatedUser;
  users.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      users[ind] = { ...elemDB, ...newUserInfo };
      updatedUser = users[ind];
    }
  });

  return updatedUser;
};

/**
 * Delete user by id
 * @param {string} id - user id
 * @returns {Promise<User>}
 */
const deleteUser = async (id) => {
  let deletedUser;

  users.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      deletedUser = users.splice(ind, 1);
    }
  });

  return deletedUser;
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
