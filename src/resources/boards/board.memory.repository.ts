import { DB } from '../../inMemoryDB/inMemoryDB';
import { Board, IColumn, IBoard } from './board.model';

export interface INewBoard {
  title: string;
  columns: Array<IColumn>;
}

export interface IBoardUpdateInfo {
  title?: string;
  columns?: Array<IColumn>;
}

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
