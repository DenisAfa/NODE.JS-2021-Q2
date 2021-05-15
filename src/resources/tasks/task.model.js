const { v4: uuid } = require('uuid');
const { DB_USERS } = require('../users/inMemoryDbUsers');
const { DB_BOARDS } = require('../boards/inMemoryDbBoards');

class Task {
  constructor({
    id = uuid(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = DB_USERS[0].id,
    boardId = DB_BOARDS[0].id,
    columnId = DB_BOARDS[0].columns[0].id,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
