import { ControllerBase } from "../../shared/controllers/controller.base";
import { AddressService } from "./address.service";
import { AddressStrategy } from "./address.strategy";
import { Address } from "./address.types";

export class AddressController extends ControllerBase<Address> {
  constructor() {
    super(new AddressService(), new AddressStrategy());
  }
}
