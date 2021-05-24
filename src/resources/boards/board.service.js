const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');
const Board = require('./board.model');

const getBoards = async (req, res) => {
  const boards = await boardsRepo.getAll();

  res.status(200).json(boards.map(Board.toResponse));
};

const getBoard = async (req, res) => {
  const { id } = req.params;
  const board = await boardsRepo.getBoard(id);

  if (board) res.status(200).json(Board.toResponse(board));

  if (!board) res.status(404).json({ message: 'Board not found' });
};

const createBoard = async (req, res) => {
  const newBoardInfo = req.body;

  const newBoard = await boardsRepo.createBoard(newBoardInfo);

  if (newBoard) res.status(201).json(Board.toResponse(newBoard));
};

const updateBoard = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  const updatedBoard = await boardsRepo.updateBoard(id, newInfo);

  if (updatedBoard) res.status(200).json(Board.toResponse(updatedBoard));
};

const deleteBoard = async (req, res) => {
  const { id } = req.params;

  await tasksRepo.deleteTaskIfBoardDelete(id);
  const deletedBoard = await boardsRepo.deleteBoard(id);

  if (deletedBoard)
    res.status(204).json({ message: 'The board has been deleted' });

  if (!deletedBoard) res.status(404).json({ message: 'Board not found' });
};

module.exports = { getBoards, getBoard, createBoard, updateBoard, deleteBoard };
