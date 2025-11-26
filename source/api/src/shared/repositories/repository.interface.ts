import { AnyPgTable, PgTable, TableConfig } from "drizzle-orm/pg-core";
import { RequestQuerystringDefault } from "fastify";

export interface IEntityRepository<TEntity> {
  table: AnyPgTable;

  getAsync(query?: RequestQuerystringDefault): Promise<TEntity[]>;
  createAsync(payload: TEntity): Promise<TEntity>;
  getByIdAsync(id: string): Promise<TEntity>;
  updateAsync(id: string, payload: TEntity): Promise<TEntity>;
  deleteAsync(id: string): Promise<void>;
  existsAsync(id: string): Promise<boolean>;
}
