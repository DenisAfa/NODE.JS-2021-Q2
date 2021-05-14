const Board = require('./board.model');

const DB = [new Board({ title: 'DenisBoard' }), new Board(), new Board()];

module.exports = { DB };
