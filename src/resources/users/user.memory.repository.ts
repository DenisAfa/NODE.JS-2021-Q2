import { DB } from '../../inMemoryDB/inMemoryDB';
import { User } from './user.model';

const getAll = async (): Promise<Array<User>> => DB.users;

const getUser = async (id: string): Promise<User | undefined> =>
  DB.users.find((user) => user.id === id);

const createUser = async (userInfo: object): Promise<User> => {
  const newUser = new User({ ...userInfo });
  DB.users.push(newUser);

  return newUser;
};

const updateUser = async (
  id: string,
  newUserInfo: object
): Promise<User | undefined> => {
  let updatedUser;
  DB.users.forEach((user, ind) => {
    if (user.id === id) {
      DB.users[ind] = { ...user, ...newUserInfo };
      updatedUser = DB.users[ind];
    }
  });

  return updatedUser;
};

const deleteUser = async (id: string): Promise<User | undefined> => {
  let deletedUser;

  DB.users.forEach((user, ind) => {
    if (user.id === id) {
      deletedUser = DB.users.splice(ind, 1);
    }
  });

  return deletedUser;
};

export { getAll, getUser, createUser, updateUser, deleteUser };
