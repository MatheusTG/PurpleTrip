import { address } from "../../infra/db/schema";
import { RepositoryBase } from "../../shared/repositories/repository.base";
import { Address } from "./address.types";

export class AddressRepository extends RepositoryBase<Address> {
  constructor() {
    super(address);
  }
}
