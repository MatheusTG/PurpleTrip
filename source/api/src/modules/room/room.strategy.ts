import { StrategyBase } from "../../shared/strategies/strategy.base";
import { Room } from "./room.types";

export class RoomStrategy extends StrategyBase<Room> {
  Validate(body: unknown): Room {
    return body as Room;
  }
}
