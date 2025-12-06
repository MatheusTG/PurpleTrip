import { FastifyReply, FastifyRequest } from "fastify";
import { IEntityService } from "../services/service.interface";
import { IEntityStrategy } from "../strategies/strategy.interface";

export interface IEntityController<TEntity extends Record<string, unknown>> {
  service: IEntityService<TEntity>;
  strategy: IEntityStrategy<TEntity>;

  getAsync(req: FastifyRequest, reply: FastifyReply): Promise<void>;
  createAsync(req: FastifyRequest, reply: FastifyReply): Promise<void>;
  getByIdAsync(req: FastifyRequest, reply: FastifyReply): Promise<void>;
  updateAsync(req: FastifyRequest, reply: FastifyReply): Promise<void>;
  deleteAsync(req: FastifyRequest, reply: FastifyReply): Promise<void>;
}
