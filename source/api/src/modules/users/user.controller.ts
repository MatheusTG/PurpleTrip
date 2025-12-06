import { ControllerBase } from "../../shared/controllers/controller.base";
import { UserService } from "./user.service";
import { UserStrategy } from "./user.strategy";
import { User } from "./user.types";

export class UserController extends ControllerBase<User> {
  constructor() {
    super(new UserService(), new UserStrategy());
  }
}
