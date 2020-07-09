export interface UserModel {
  name: string;
  email: string;
  accountId: string;
}

export const defaultUser: UserModel = {
  name: "Guest",
  email: null,
  accountId: null
};