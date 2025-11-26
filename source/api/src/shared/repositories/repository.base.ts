import { RequestQuerystringDefault } from "fastify";
import { IEntityRepository } from "./repository.interface";
import db from "../../infra/database";
import * as schema from "../../infra/db/schema";
import { eq, InferInsertModel } from "drizzle-orm";

type SchemaTables = typeof schema;
type TableFromSchema = SchemaTables[keyof SchemaTables];

export class RepositoryBase<TEntity> implements IEntityRepository<TEntity> {
  table: TableFromSchema;

  constructor(table: TableFromSchema) {
    this.table = table;
  }

  async getAsync(query?: RequestQuerystringDefault): Promise<TEntity[]> {
    const rows = await db.select().from(this.table);
    return rows as TEntity[];
  }

  async createAsync(payload: TEntity): Promise<TEntity> {
    const rows = await db
      .insert(this.table)
      .values(payload as InferInsertModel<typeof this.table>)
      .returning();

    return rows[0] as TEntity;
  }

  async getByIdAsync(id: string): Promise<TEntity> {
    const rows = await db.select().from(this.table).where(eq(this.table.id, id));
    return rows[0] as TEntity;
  }

  async updateAsync(id: string, payload: Partial<TEntity>): Promise<TEntity> {
    const rows = await db.update(this.table).set(payload).where(eq(this.table.id, id)).returning();
    return rows[0] as TEntity;
  }

  async deleteAsync(id: string): Promise<void> {
    const rows = await db.delete(this.table).where(eq(this.table.id, id)).returning();
  }

  async existsAsync(id: string): Promise<boolean> {
    const rows = await db.select().from(this.table).where(eq(this.table.id, id));
    if (rows.length > 0) {
      return true;
    }
    return false;
  }
}
