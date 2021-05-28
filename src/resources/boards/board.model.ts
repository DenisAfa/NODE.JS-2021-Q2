import { v4 as uuid } from 'uuid';

export interface IColumn {
  id: string;
  title: string;
  order: number;
}

export interface IBoard {
  id: string;
  title: string;
  columns: Array<IColumn>;
}

class Board implements IBoard {
  id: string;

  title: string;

  columns: Array<IColumn>;

  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = [
      {
        id: uuid(),
        title: 'TITLE',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(
    board: IBoard
  ): { id: string; title: string; columns: Array<IColumn> } {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export { Board };
