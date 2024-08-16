import {timestamp, text, pgTable,serial, varchar, integer} from 'drizzle-orm/pg-core'

export const UsersTable = pgTable("users",{
    id : serial('id').primaryKey().notNull(),
    userName: varchar("userName").notNull(),
    type: varchar("type").notNull(),
    password: varchar("password").notNull(),
    email: varchar("email").notNull(),
    createdAt: timestamp('createdAt').defaultNow()
});

export const DonationTable = pgTable("donations", {
    id: serial('id').primaryKey().notNull(),
    name: varchar("name").notNull(),
    idCardNumber: varchar("idCardNumber").notNull(),
    phoneNumber: varchar("phoneNumber").notNull(),
    address: varchar("address").notNull(),
    state: varchar("state").notNull(),
    type: varchar("type").notNull(),
    occupation: varchar("occupation").notNull(),
    wayOfIncome: varchar("wayOfIncome").notNull(),
    purposeOfDonation: varchar("purposeOfDonation").notNull(),
    targetReceiver: varchar("targetReceiver").notNull(),
    createdAt: timestamp('createdAt').defaultNow()
});


