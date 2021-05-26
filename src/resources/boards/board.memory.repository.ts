import { DB } from '../../inMemoryDB/inMemoryDB';
import { Board } from './board.model';

/**
 * Get all boards
 * @returns {Promise<Array<Board>>}
 */
const getAll = async (): Promise<Array<Board>> => DB.boards;

/**
 * Get board by id
 * @param {string} id - board id
 * @returns {Promise<Board>}
 */
const getBoard = async (id: string): Promise<Board | undefined> =>
  DB.boards.find((board) => board.id === id);

/**
 * Create board
 * @param {object} newInfo - new board info
 * @returns {Promise<Board>}
 */
const createBoard = async (newInfo: object): Promise<Board> => {
  const newBoard = new Board({ ...newInfo });
  DB.boards.push(newBoard);

  return newBoard;
};

/**
 * Update board information
 * @param {string} id - board id
 * @param {object} newInfo - new info about board
 * @returns {Promise<Board>}
 */
const updateBoard = async (
  id: string,
  newInfo: object
): Promise<Board | undefined> => {
  let updatedBoard;
  DB.boards.forEach((board, ind) => {
    if (board.id === id) {
      DB.boards[ind] = { ...board, ...newInfo };
      updatedBoard = DB.boards[ind];
    }
  });

  return updatedBoard;
};

/**
 * Delete board by id
 * @param {string} id - board id
 * @returns {Promise<Board>}
 */
const deleteBoard = async (id: string): Promise<Board | undefined> => {
  let deletedBoard;

  DB.boards.forEach((board, ind) => {
    if (board.id === id) {
      deletedBoard = DB.boards.splice(ind, 1);
    }
  });

  return deletedBoard;
};

export { getAll, getBoard, createBoard, updateBoard, deleteBoard };
