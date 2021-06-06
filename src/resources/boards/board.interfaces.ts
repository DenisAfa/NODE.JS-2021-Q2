interface IBoard {
  id: string;
  title: string;
  columns: Array<IColumn>;
}

interface IColumn {
  id: string;
  title: string;
  order: number;
}

interface INewBoard {
  title: string;
  columns: Array<IColumn>;
}

interface IBoardUpdateInfo {
  title?: string;
  columns?: Array<IColumn>;
}

export { IBoard, IColumn, INewBoard, IBoardUpdateInfo };
