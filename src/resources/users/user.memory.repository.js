const { v4: uuid } = require('uuid');
const { DB } = require('./inMemoryDbUsers');

const getAll = async () => DB;

const getUser = async (id) => DB.find((elemDB) => elemDB.id === id);

const createUser = async (userInfo) => {
  const newUser = { ...userInfo, id: uuid() };
  DB.push(newUser);

  return newUser;
};

const updateUser = async (id, newUserInfo) => {
  let updatedUser;
  DB.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      DB[ind] = { ...elemDB, ...newUserInfo };
      updatedUser = DB[ind];
    }
  });

  return updatedUser;
};

const deleteUser = async (id) => {
  let deletedUser;
  DB.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      deletedUser = DB.splice(ind, 1);
    }
  });

  return deletedUser;
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
