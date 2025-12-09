import { StrategyBase } from "../../shared/strategies/strategy.base";
import { Address } from "./address.types";

export class AddressStrategy extends StrategyBase<Address> {
  Validate(body: unknown): Address {
    return body as Address;
  }
}
