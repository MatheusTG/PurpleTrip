import { RequestQuerystringDefault } from "fastify";
import { IEntityRepository } from "../repositories/repository.interface";
import { IEntityService } from "./service.interface";

export class ServiceBase<TEntity extends Record<string, unknown>> implements IEntityService<TEntity> {
  repository: IEntityRepository<TEntity>;

  constructor(repository: IEntityRepository<TEntity>) {
    this.repository = repository;
  }

  async getAsync(query?: RequestQuerystringDefault): Promise<TEntity[]> {
    return this.repository.getAsync(query);
  }

  async createAsync(payload: TEntity): Promise<TEntity> {
    return this.repository.createAsync(payload);
  }

  async getByIdAsync(id: string): Promise<TEntity> {
    await this.validadeExists(id);
    return this.repository.getByIdAsync(id);
  }

  async updateAsync(id: string, payload: TEntity): Promise<TEntity> {
    await this.validadeExists(id);
    return this.repository.updateAsync(id, payload);
  }

  async deleteAsync(id: string): Promise<void> {
    await this.validadeExists(id);
    return this.repository.deleteAsync(id);
  }

  private async validadeExists(id: string): Promise<void> {
    const exists = await this.repository.existsAsync(id);
    if (!exists) {
      throw new Error(`Entity with id ${id} does not exist.`);
    }
  }
}
