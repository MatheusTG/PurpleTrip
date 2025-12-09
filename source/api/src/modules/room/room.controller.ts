import { ControllerBase } from "../../shared/controllers/controller.base";
import { RoomService } from "./room.service";
import { RoomStrategy } from "./room.strategy";
import { Room } from "./room.types";

export class RoomController extends ControllerBase<Room> {
  constructor() {
    super(new RoomService(), new RoomStrategy());
  }
}
