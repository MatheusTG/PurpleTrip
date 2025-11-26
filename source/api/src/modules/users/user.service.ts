import { ServiceBase } from "../../shared/services/service.base";
import { UserRepository } from "./user.repository";
import { User } from "./user.types";

export class UserService extends ServiceBase<User> {
  constructor() {
    super(new UserRepository());
  }
}
