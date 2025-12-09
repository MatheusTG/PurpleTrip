CREATE TYPE "public"."cancellation_policy" AS ENUM('flexible', 'moderate', 'strict');--> statement-breakpoint
CREATE TYPE "public"."room_category" AS ENUM('house', 'hotel', 'apartment', 'farm', 'hostel', 'loft');--> statement-breakpoint
CREATE TABLE "rooms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" uuid NOT NULL,
	"address_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"image_path" text,
	"category" "room_category" NOT NULL,
	"double_beds" integer DEFAULT 0 NOT NULL,
	"single_beds" integer DEFAULT 0 NOT NULL,
	"daily_price" integer NOT NULL,
	"cancellation_policy" "cancellation_policy" NOT NULL,
	"minimum_stay_days" integer DEFAULT 1 NOT NULL,
	"maximum_stay_days" text,
	"is_blocked" boolean DEFAULT false NOT NULL,
	"apartment_number" text,
	"maximum_guests" text,
	"number_of_single_bed" text,
	"number_of_double_bed" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
