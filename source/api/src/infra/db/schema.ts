import { pgTable, uuid, text, date, boolean, pgEnum, timestamp } from "drizzle-orm/pg-core";

export const profile_type = pgEnum("profile_type", ["QUEST", "HOST", "ADMIN"]);
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  birthDate: date("birth_date"),
  photoPath: text("photo_path"),
  passwordHash: text("password_hash").notNull(),
  isBanned: boolean("is_banned").notNull().default(false),
  profileType: profile_type("profile_type").notNull().default("QUEST"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const address = pgTable("address", {
  id: uuid("id").primaryKey().defaultRandom(),
  cep: text("cep").notNull(),
  bairro: text("neighborhood").notNull(),
  street: text("street").notNull(),
  number: text("number"),
  complemet: text("number"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
