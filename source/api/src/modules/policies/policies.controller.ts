import { ControllerBase } from "../../shared/controllers/controller.base";
import { PoliciesService } from "./policies.service";
import { PoliciesStrategy } from "./policies.strategy";
import { Policie } from "./policies.types";

export class PoliciesController extends ControllerBase<Policie> {
  constructor() {
    super(new PoliciesService(), new PoliciesStrategy());
  }
}
