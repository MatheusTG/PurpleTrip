import { RequestBodyDefault } from "fastify";

export interface IEntityStrategy<TEntity extends Record<string, unknown>> {
  Validate(body: RequestBodyDefault): TEntity;
}
