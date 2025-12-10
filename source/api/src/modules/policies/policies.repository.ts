import { policies } from "../../infra/db/schema";
import { RepositoryBase } from "../../shared/repositories/repository.base";
import { Policie } from "./policies.types";

export class PoliciesRepository extends RepositoryBase<Policie> {
  constructor() {
    super(policies);
  }
}
