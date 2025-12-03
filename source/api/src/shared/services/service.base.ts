import { RequestQuerystringDefault } from "fastify";
import { AppError } from "../errors/app-error";
import { ExistsParams, IEntityRepository } from "../repositories/repository.interface";
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
    await this.validateExists({ id });
    return this.repository.getByIdAsync(id);
  }

  async updateAsync(id: string, payload: TEntity): Promise<TEntity> {
    await this.validateExists({ id });
    return this.repository.updateAsync(id, payload);
  }

  async deleteAsync(id: string): Promise<void> {
    await this.validateExists({ id });
    return this.repository.deleteAsync(id);
  }

  private async validateExists({ id, email }: ExistsParams): Promise<void> {
    if (!id && !email) {
      throw new AppError("Either id or email must be provided to validate existence.", 400);
    }
    const exists = await this.repository.existsAsync({ id: id!, email: email! });
    if (!exists) {
      throw new AppError(`Entity with id ${id} does not exist.`, 404);
    }
  }
}
