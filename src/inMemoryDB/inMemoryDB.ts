import { User } from '../resources/users/user.model';
import { Board } from '../resources/boards/board.model';
import { Task } from '../resources/tasks/task.model';
import { IUser } from '../resources/users/user.interfaces';
import { IBoard } from '../resources/boards/board.interfaces';
import { ITask } from '../resources/tasks/task.interfaces';

interface DBInterface {
  users: Array<IUser>;
  boards: Array<IBoard>;
  tasks: Array<ITask>;
}

const DB: DBInterface = {
  users: [new User({ name: 'Denis' }), new User(), new User()],
  boards: [new Board({ title: 'DenisBoard' }), new Board(), new Board()],
  tasks: [new Task({ title: 'DenisTask' }), new Task(), new Task()],
};

export { DB };
