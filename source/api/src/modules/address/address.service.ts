import { ServiceBase } from "../../shared/services/service.base";
import { AddressRepository } from "./address.repository";
import { Address } from "./address.types";

export class AddressService extends ServiceBase<Address> {
  constructor() {
    super(new AddressRepository());
  }
}
