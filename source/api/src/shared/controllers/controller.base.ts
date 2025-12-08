import { FastifyReply, FastifyRequest } from "fastify";
import { IEntityService } from "../services/service.interface";
import { IEntityStrategy } from "../strategies/strategy.interface";
import { IEntityController } from "./controller.interface";

export abstract class ControllerBase<TEntity extends Record<string, unknown>> implements IEntityController<TEntity> {
  service: IEntityService<TEntity>;
  strategy: IEntityStrategy<TEntity>;

  constructor(service: IEntityService<TEntity>, strategy: IEntityStrategy<TEntity>) {
    this.service = service;
    this.strategy = strategy;
  }

  async getAsync(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const query = req.query;
    const data = await this.service.getAsync(query);
    reply.status(200).send({ ok: true, data });
  }

  async createAsync(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const payload = this.strategy.Validate(req.body);
    const data = await this.service.createAsync(payload);
    reply.status(201).send({ ok: true, data });
  }

  async getByIdAsync(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id } = req.params as { id: string };
    const data = await this.service.getByIdAsync(id);
    reply.status(200).send({ ok: true, data });
  }

  async updateAsync(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id } = req.params as { id: string };
    const payload = this.strategy.Validate(req.body, true);
    const data = await this.service.updateAsync(id, payload);
    reply.status(200).send({ ok: true, data });
  }

  async deleteAsync(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id } = req.params as { id: string };
    await this.service.deleteAsync(id);
    reply.status(204).send();
  }
}
