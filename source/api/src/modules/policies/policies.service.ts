import { ServiceBase } from "../../shared/services/service.base";
import { PoliciesRepository } from "./policies.repository";
import { Policie } from "./policies.types";

export class PoliciesService extends ServiceBase<Policie> {
  constructor() {
    super(new PoliciesRepository());
  }
}
