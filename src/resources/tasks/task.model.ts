import { v4 as uuid } from 'uuid';

/**
 * Task
 * @typedef {Object} Task
 * @property {string} id - task id
 * @property {string} title - task title
 * @property {number} order - task order
 * @property {string} description - task description
 * @property {string} userId - user id for task
 * @property {string} boardId - board id for task
 * @property {string} columnId - column id for task
 */

interface Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
}

class Task {
  constructor({
    id = uuid(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = 'USER_ID',
    boardId = 'BOARD_ID',
    columnId = 'COLUMN_ID',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: Task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

export { Task };
