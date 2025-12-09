import { eq } from "drizzle-orm";
import db from "../../infra/database";
import { users } from "../../infra/db/schema";
import { RepositoryBase } from "../../shared/repositories/repository.base";
import { User } from "./user.types";

export class UserRepository extends RepositoryBase<User> {
  constructor() {
    super(users);
  }

  async findByEmail(email: string): Promise<User | null> {
    const rows = await db.select().from(users).where(eq(users.email, email));

    const user = rows[0];
    if (!user) return null;

    const normalizedUser = {
      ...user,
      birthDate: user.birthDate ? new Date(user.birthDate) : null,
    } as User;

    return normalizedUser;
  }
}
