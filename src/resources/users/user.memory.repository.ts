import { DB } from '../../inMemoryDB/inMemoryDB';
import { User } from './user.model';

/**
 * Get all users
 * @returns {Promise<Array<User>>}
 */
const getAll = async (): Promise<Array<User>> => DB.users;

/**
 * Get user by id
 * @param {string} id - user id
 * @returns {Promise<User>}
 */
const getUser = async (id: string): Promise<User | undefined> =>
  DB.users.find((user) => user.id === id);

/**
 * Create user
 * @param {object} userInfo - new user info
 * @returns {Promise<User>}
 */
const createUser = async (userInfo: object): Promise<User> => {
  const newUser = new User({ ...userInfo });
  DB.users.push(newUser);

  return newUser;
};

/**
 * Update user information
 * @param {string} id - user id
 * @param {object} newUserInfo - new info about user
 * @returns {Promise<User>}
 */
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

/**
 * Delete user by id
 * @param {string} id - user id
 * @returns {Promise<User>}
 */
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
