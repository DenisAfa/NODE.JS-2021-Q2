const { users } = require('../../inMemoryDB/inMemoryDB');
const User = require('./user.model');

const getAll = async () => users;

const getUser = async (id) => users.find((elemDB) => elemDB.id === id);

const createUser = async (userInfo) => {
  const newUser = new User({ ...userInfo });
  users.push(newUser);

  return newUser;
};

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
