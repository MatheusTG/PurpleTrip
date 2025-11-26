import { RequestBodyDefault } from "fastify";
import { IEntityStrategy } from "./strategy.interface";

export abstract class StrategyBase<TEntity extends Record<string, unknown>> implements IEntityStrategy<TEntity> {
  abstract Validate(body: RequestBodyDefault): TEntity;
}
