const { v4: uuid } = require('uuid');
const { DB } = require('./inMemoryDbBoards');

const getAll = async () => DB;

const getBoard = async (id) => DB.find((elemDB) => elemDB.id === id);

const createBoard = async (newInfo) => {
  const newBoard = { ...newInfo, id: uuid() };
  DB.push(newBoard);

  return newBoard;
};

const updateBoard = async (id, newInfo) => {
  let updatedBoard;
  DB.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      DB[ind] = { ...elemDB, ...newInfo };
      updatedBoard = DB[ind];
    }
  });

  return updatedBoard;
};

const deleteBoard = async (id) => {
  let deletedBoard;
  DB.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      deletedBoard = DB.splice(ind, 1);
    }
  });

  return deletedBoard;
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
