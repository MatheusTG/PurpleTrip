import { env } from "./src/env";

export default {
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/infra/db/schema.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
};
