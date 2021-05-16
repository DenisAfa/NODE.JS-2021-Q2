const { DB_BOARDS } = require('./inMemoryDbBoards');
const Board = require('./board.model');

const getAll = async () => DB_BOARDS;

const getBoard = async (id) => DB_BOARDS.find((elemDB) => elemDB.id === id);

const createBoard = async (newInfo) => {
  const newBoard = new Board({ ...newInfo });
  DB_BOARDS.push(newBoard);

  return newBoard;
};

const updateBoard = async (id, newInfo) => {
  let updatedBoard;
  DB_BOARDS.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      DB_BOARDS[ind] = { ...elemDB, ...newInfo };
      updatedBoard = DB_BOARDS[ind];
    }
  });

  return updatedBoard;
};

const deleteBoard = async (id) => {
  let deletedBoard;

  DB_BOARDS.forEach((elemDB, ind) => {
    if (elemDB.id === id) {
      deletedBoard = DB_BOARDS.splice(ind, 1);
    }
  });

  return deletedBoard;
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
