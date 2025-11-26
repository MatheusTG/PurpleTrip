import { StrategyBase } from "../../shared/strategies/strategy.base";
import { User } from "./user.types";

export class UserStrategy extends StrategyBase<User> {
  Validate(body: unknown): User {
    return body as User;
  }
}
