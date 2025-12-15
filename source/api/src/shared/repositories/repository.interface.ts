import { AnyPgTable } from "drizzle-orm/pg-core";
import { RequestQuerystringDefault } from "fastify";

export type ExistsParams = { id: string; email?: string } | { id?: string; email: string };

export type TableWithIdAndEmail = AnyPgTable & {
  id: any;
  email: any;
};

export interface IEntityRepository<TEntity> {
  table: TableWithIdAndEmail;

  getAsync(query?: RequestQuerystringDefault): Promise<TEntity[]>;
  createAsync(payload: TEntity): Promise<TEntity>;
  getByIdAsync(id: string): Promise<TEntity>;
  updateAsync(id: string, payload: TEntity): Promise<TEntity>;
  deleteAsync(id: string): Promise<void>;
  existsAsync(params: ExistsParams): Promise<boolean>;
}
