import { DB } from '../../inMemoryDB/inMemoryDB';
import { User, IUser } from './user.model';

export interface INewUser {
  name: string;
  login: string;
  password: string;
}

export interface IUserUpdateInfo {
  name?: string;
  login?: string;
  password?: string;
}

const getAll = async (): Promise<Array<IUser>> => DB.users;

const getUser = async (id: string): Promise<IUser | undefined> =>
  DB.users.find((user) => user.id === id);

const createUser = async (userInfo: INewUser): Promise<IUser> => {
  const newUser = new User({ ...userInfo });
  DB.users.push(newUser);

  return newUser;
};

const updateUser = async (
  id: string,
  newUserInfo: IUserUpdateInfo
): Promise<IUser | undefined> => {
  let updatedUser: IUser | undefined;
  DB.users.forEach((user, ind) => {
    if (user.id === id) {
      DB.users[ind] = { ...user, ...newUserInfo };
      updatedUser = DB.users[ind];
    }
  });

  return updatedUser;
};

const deleteUser = async (id: string): Promise<IUser | undefined> => {
  let deletedUser: IUser | undefined;

  DB.users.forEach((user, ind) => {
    if (user.id === id) {
      [deletedUser] = DB.users.splice(ind, 1);
    }
  });

  return deletedUser;
};

export { getAll, getUser, createUser, updateUser, deleteUser };
