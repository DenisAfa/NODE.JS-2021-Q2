const { boards } = require('../../inMemoryDB/inMemoryDB');
const Board = require('./board.model');

const getAll = async () => boards;

const getBoard = async (id) => boards.find((elemDB) => elemDB.id === id);

const createBoard = async (newInfo) => {
  const newBoard = new Board({ ...newInfo });
  boards.push(newBoard);

  return newBoard;
};

const updateBoard = async (id, newInfo) => {
  let updatedBoard;
  boards.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      boards[ind] = { ...elemDB, ...newInfo };
      updatedBoard = boards[ind];
    }
  });

  return updatedBoard;
};

const deleteBoard = async (id) => {
  let deletedBoard;

  boards.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      deletedBoard = boards.splice(ind, 1);
    }
  });

  return deletedBoard;
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
