import { User } from '../resources/users/user.model';
import { Board } from '../resources/boards/board.model';
import { Task } from '../resources/tasks/task.model';

interface DBInterface {
  users: Array<User>;
  boards: Array<Board>;
  tasks: Array<Task>;
}

const DB: DBInterface = {
  users: [new User({ name: 'Denis' }), new User(), new User()],
  boards: [new Board({ title: 'DenisBoard' }), new Board(), new Board()],
  tasks: [new Task({ title: 'DenisTask' }), new Task(), new Task()],
};

export { DB };
