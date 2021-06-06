interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

interface INewUser {
  name: string;
  login: string;
  password: string;
}

interface IUserUpdateInfo {
  name?: string;
  login?: string;
  password?: string;
}

export { IUser, INewUser, IUserUpdateInfo };
