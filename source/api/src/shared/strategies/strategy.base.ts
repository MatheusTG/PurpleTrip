import { RequestBodyDefault } from "fastify";
import { IEntityStrategy } from "./strategy.interface";

export abstract class StrategyBase<TEntity extends Record<string, unknown>> implements IEntityStrategy<TEntity> {
  Validate(body: RequestBodyDefault, _?: boolean): TEntity {
    if (typeof body !== "object" || body === undefined) {
      throw new Error("Body must be a valid object");
    }

    if (body === null) {
      throw new Error("Body cannot be null");
    }

    return body as TEntity;
  }
}
