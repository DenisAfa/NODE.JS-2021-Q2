import { v4 as uuid } from 'uuid';

interface Column {
  id: string;
  title: string;
  order: number;
}

interface Board {
  id: string;
  title: string;
  columns: Array<Column>;
}

class Board {
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
    board: Board
  ): { id: string; title: string; columns: Array<Column> } {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export { Board };
