import { v4 as uuid } from 'uuid'; // ПРОВЕРИТЬ

/**
 * Board
 * @typedef {Object} Board
 * @property {string} id - board id
 * @property {string} title - board title
 * @property {Array<Column>} - board columns
 */

/**
 * Column
 * @typedef {Object} Column
 * @property {string} id - column id
 * @property {string} title - column title
 * @property {number} order - column order
 */

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

  static toResponse(board: Board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export { Board };
