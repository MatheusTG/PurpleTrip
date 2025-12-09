import { rooms } from "../../infra/db/schema";
import { RepositoryBase } from "../../shared/repositories/repository.base";
import { Room } from "./room.types";

export class RoomRepository extends RepositoryBase<Room> {
  constructor() {
    super(rooms);
  }
}
