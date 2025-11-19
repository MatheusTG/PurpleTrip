CREATE TYPE "public"."profile_type" AS ENUM('QUEST', 'HOST', 'ADMIN');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"birth_date" date,
	"photo_path" text,
	"password_hash" text NOT NULL,
	"is_banned" boolean DEFAULT false NOT NULL,
	"profileType" "profile_type" DEFAULT 'QUEST' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
