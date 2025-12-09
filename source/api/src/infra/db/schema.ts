import { pgTable, uuid, text, date, boolean, pgEnum, timestamp, integer } from "drizzle-orm/pg-core";

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
  neighborhood: text("neighborhood").notNull(),
  street: text("street").notNull(),
  number: text("number"),
  complemet: text("complemet"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const roomCategory = pgEnum("room_category", ["house", "hotel", "apartment", "farm", "hostel", "loft"]);

export const cancellationPolicy = pgEnum("cancellation_policy", ["flexible", "moderate", "strict"]);

export const rooms = pgTable("rooms", {
  id: uuid("id").primaryKey().defaultRandom(),

  ownerId: uuid("owner_id").notNull(),
  addressId: uuid("address_id").notNull(),

  title: text("title").notNull(),
  description: text("description"),
  imagePath: text("image_path"),

  category: roomCategory("category").notNull(),

  doubleBeds: integer("double_beds").notNull().default(0),
  singleBeds: integer("single_beds").notNull().default(0),

  dailyPrice: integer("daily_price").notNull(),

  cancellationPolicy: cancellationPolicy("cancellation_policy").notNull(),

  minimumStayDays: integer("minimum_stay_days").notNull().default(1),
  maximumStayDays: text("maximum_stay_days"),

  isBlocked: boolean("is_blocked").notNull().default(false),

  apartmentNumber: text("apartment_number"),
  maximumGuests: text("maximum_guests"),

  numberOfSingleBed: text("number_of_single_bed"),
  numberOfDoubleBed: text("number_of_double_bed"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
