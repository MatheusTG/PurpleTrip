import { ServiceBase } from "../../shared/services/service.base";
import { RoomRepository } from "./room.repository";
import { Room } from "./room.types";

export class RoomService extends ServiceBase<Room> {
  constructor() {
    super(new RoomRepository());
  }
}
