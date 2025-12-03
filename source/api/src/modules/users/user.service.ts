import { ServiceBase } from "../../shared/services/service.base";
import { UserRepository } from "./user.repository";
import { User } from "./user.types";

export class UserService extends ServiceBase<User> {
  constructor() {
    super(new UserRepository());
  }

  override async createAsync(payload: User): Promise<User> {
    if (await this.repository.existsAsync({ email: payload.email })) {
      throw new Error(`User with email ${payload.email} already exists.`);
    }
    return this.repository.createAsync(payload);
  }
}
