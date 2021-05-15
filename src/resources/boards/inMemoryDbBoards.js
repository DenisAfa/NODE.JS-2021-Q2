const Board = require('./board.model');

const DB_BOARDS = [
  new Board({ title: 'DenisBoard' }),
  new Board(),
  new Board(),
];

module.exports = { DB_BOARDS };
