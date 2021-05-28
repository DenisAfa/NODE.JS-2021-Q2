import { DB } from '../../inMemoryDB/inMemoryDB';
import { Board } from './board.model';

const getAll = async (): Promise<Array<Board>> => DB.boards;

const getBoard = async (id: string): Promise<Board | undefined> =>
  DB.boards.find((board) => board.id === id);

const createBoard = async (newInfo: object): Promise<Board> => {
  const newBoard = new Board({ ...newInfo });
  DB.boards.push(newBoard);

  return newBoard;
};

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
