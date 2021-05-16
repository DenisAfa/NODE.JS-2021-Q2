const { DB_USERS } = require('./inMemoryDbUsers');
const User = require('./user.model');

const getAll = async () => DB_USERS;

const getUser = async (id) => DB_USERS.find((elemDB) => elemDB.id === id);

const createUser = async (userInfo) => {
  const newUser = new User({ ...userInfo });
  DB_USERS.push(newUser);

  return newUser;
};

const updateUser = async (id, newUserInfo) => {
  let updatedUser;
  DB_USERS.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      DB_USERS[ind] = { ...elemDB, ...newUserInfo };
      updatedUser = DB_USERS[ind];
    }
  });

  return updatedUser;
};

const deleteUser = async (id) => {
  let deletedUser;

  DB_USERS.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      deletedUser = DB_USERS.splice(ind, 1);
    }
  });

  return deletedUser;
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
