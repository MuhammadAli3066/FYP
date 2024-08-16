CREATE TABLE IF NOT EXISTS "donations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"idCardNumber" varchar NOT NULL,
	"phoneNumber" varchar NOT NULL,
	"address" varchar NOT NULL,
	"state" varchar NOT NULL,
	"type" varchar NOT NULL,
	"occupation" varchar NOT NULL,
	"wayOfIncome" varchar NOT NULL,
	"purposeOfDonation" varchar NOT NULL,
	"targetReceiver" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userName" varchar NOT NULL,
	"type" varchar NOT NULL,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
