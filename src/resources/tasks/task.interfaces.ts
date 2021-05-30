interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
}

interface INewTask {
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}

interface ITaskUpdateInfo {
  title?: string;
  order?: number;
  description?: string;
  userId?: string;
  boardId?: string;
  columnId?: string;
}

export { ITask, INewTask, ITaskUpdateInfo };
