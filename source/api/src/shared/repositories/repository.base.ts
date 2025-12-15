import { eq, InferInsertModel } from "drizzle-orm";
import { RequestQuerystringDefault } from "fastify";
import z from "zod";
import db from "../../infra/database";
import * as schema from "../../infra/db/schema";
import { AppError } from "../errors/app-error";
import { ExistsParams, IEntityRepository, TableWithIdAndEmail } from "./repository.interface";
import { AnyPgTable } from "drizzle-orm/pg-core";

type SchemaTables = typeof schema;
type TableFromSchema = SchemaTables[keyof SchemaTables];

export class RepositoryBase<TEntity> implements IEntityRepository<TEntity> {
  table: TableWithIdAndEmail;

  constructor(table: TableWithIdAndEmail) {
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

  async existsAsync({ id, email }: ExistsParams): Promise<boolean> {
    try {
      const rows = await db
        .select()
        .from(this.table)
        .where(id ? eq(this.table.id, id) : eq(this.table.email, email!));
      if (rows.length > 0) return true;
      return false;
    } catch (error) {
      const { success: isUUID } = z.uuid().safeParse(id);
      if (!isUUID) throw new AppError(`Invalid UUID format: ${id}`, 400);
      return false;
    }
  }
}
