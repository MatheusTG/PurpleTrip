import { RepositoryBase } from "../../shared/repositories/repository.base";
import { User } from "./user.types";
import { users } from "../../infra/db/schema";

export class UserRepository extends RepositoryBase<User> {
  constructor() {
    super(users);
  }
}
