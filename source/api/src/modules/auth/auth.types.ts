import { User } from "../users/user.types";

export type AuthCredentials = {
  email: string;
  password: string;
};

export type AuthPayload = {
  token: string;
  user: Omit<User, "passwordHash">;
};

