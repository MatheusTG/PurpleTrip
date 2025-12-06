import { RequestQuerystringDefault } from "fastify";
import { IEntityRepository } from "../repositories/repository.interface";

export interface IEntityService<TEntity extends Record<string, unknown>> {
  repository: IEntityRepository<TEntity>;

  getAsync(query?: RequestQuerystringDefault): Promise<TEntity[]>;
  createAsync(payload: TEntity): Promise<TEntity>;
  getByIdAsync(id: string): Promise<TEntity>;
  updateAsync(id: string, payload: TEntity): Promise<TEntity>;
  deleteAsync(id: string): Promise<void>;
}
