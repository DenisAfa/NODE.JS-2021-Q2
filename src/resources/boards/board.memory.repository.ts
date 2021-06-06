import { DB } from '../../inMemoryDB/inMemoryDB';
import { IBoard, IBoardUpdateInfo, INewBoard } from './board.interfaces';
import { Board } from './board.model';

const getAll = async (): Promise<Array<IBoard>> => DB.boards;

const getBoard = async (id: string): Promise<IBoard | undefined> =>
  DB.boards.find((board) => board.id === id);

const createBoard = async (newInfo: INewBoard): Promise<IBoard> => {
  const newBoard = new Board({ ...newInfo });
  DB.boards.push(newBoard);

  return newBoard;
};

const updateBoard = async (
  id: string,
  newInfo: IBoardUpdateInfo
): Promise<IBoard | undefined> => {
  let updatedBoard: IBoard | undefined;
  DB.boards.forEach((board, ind) => {
    if (board.id === id) {
      DB.boards[ind] = { ...board, ...newInfo };
      updatedBoard = DB.boards[ind];
    }
  });

  return updatedBoard;
};

const deleteBoard = async (id: string): Promise<IBoard | undefined> => {
  let deletedBoard: IBoard | undefined;

  DB.boards.forEach((board, ind) => {
    if (board.id === id) {
      [deletedBoard] = DB.boards.splice(ind, 1);
    }
  });

  return deletedBoard;
};

export { getAll, getBoard, createBoard, updateBoard, deleteBoard };
