const { boards } = require('../../inMemoryDB/inMemoryDB');
const Board = require('./board.model');

/**
 * Get all boards
 * @returns {Promise<Array<Board>>}
 */
const getAll = async () => boards;

/**
 * Get board by id
 * @param {string} id - board id
 * @returns {Promise<Board>}
 */
const getBoard = async (id) => boards.find((elemDB) => elemDB.id === id);

/**
 * Create board
 * @param {object} newInfo - new board info
 * @returns {Promise<Board>}
 */
const createBoard = async (newInfo) => {
  const newBoard = new Board({ ...newInfo });
  boards.push(newBoard);

  return newBoard;
};

/**
 * Update board information
 * @param {string} id - board id
 * @param {object} newInfo - new info about board
 * @returns {Promise<Board>}
 */
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

/**
 * Delete board by id
 * @param {string} id - board id
 * @returns {Promise<Board>}
 */
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
