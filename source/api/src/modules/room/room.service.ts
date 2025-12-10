import { ServiceBase } from "../../shared/services/service.base";
import { RoomRepository } from "./room.repository";
import { AddressRepository } from "../address/address.repository";
import { PoliciesRepository } from "../policies/policies.repository";
import { Room, RoomResponse } from "./room.types";

export class RoomService extends ServiceBase<Room> {
  constructor() {
    super(new RoomRepository());
  }

  override async createAsync(payload: RoomResponse): Promise<RoomResponse> {
    const addressRepository = new AddressRepository();
    const policieRepository = new PoliciesRepository();

    const { address, policies, ...roomData } = payload;

    const roomId = crypto.randomUUID();

    const roomResponse = await this.repository.createAsync({ ...roomData, id: roomId });
    const addressResponse = await addressRepository.createAsync(address);

    // Arrumar depois ======================================
    const policiesResponse = await Promise.all(
      policies.map(policie => {
        return policieRepository.createAsync({ ...policie, roomId });
      })
    );

    return { ...roomResponse, address: addressResponse, policies: policiesResponse };
  }
}
