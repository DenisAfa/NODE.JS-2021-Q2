const { v4: uuid } = require('uuid');

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

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
