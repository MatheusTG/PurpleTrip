import { StrategyBase } from "../../shared/strategies/strategy.base";
import { Policie } from "./policies.types";

export class PoliciesStrategy extends StrategyBase<Policie> {
  Validate(body: unknown): Policie {
    return body as Policie;
  }
}
