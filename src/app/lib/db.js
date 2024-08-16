import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from 'drizzle-orm/neon-http'
import {UsersTable } from "./schema";
import { desc, eq, sql as sqld } from "drizzle-orm";
import * as schema from './schema'
import { hashPassword } from "./passwordUtils";

neonConfig.fetchConnectionCache = true;
const sql = neon('postgresql://MuhammadAli3066:XChGOyJZ1nU4@ep-cold-dawn-71514462.us-east-2.aws.neon.tech/fundingApp?sslmode=require');
const db = drizzle(sql, { schema })



export async function helloWorld() {
    const start = new Date()
    const [dbResponse] = await sql`SELECT NOW();`
    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : ""
    const end = new Date()
    return { dbNow: dbNow, Latency: Math.abs(end - start) }
}

async function configureDB() {
   await sql `CREATE TABLE IF NOT EXISTS "donations" (
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
`
    await sql `CREATE TABLE IF NOT EXISTS "users" (
        "id" serial PRIMARY KEY NOT NULL,
        "userName" varchar NOT NULL,
        "type" varchar NOT NULL,
        "password" varchar NOT NULL,
        "email" varchar NOT NULL,
        "createdAt" timestamp DEFAULT now()
    );`
}

configureDB().catch(err => console.log("Error while config : ", err))

// Users Portion

export async function registerUser(newUserData) {
    const {userName,type,password,email} = newUserData
    console.log("In DB : ",password);
    const toInsertData = {
        userName: userName,
        type:  type,
        password: hashPassword(password)
    }
    if(email){
        toInsertData["email"] = email
    }
    console.log("To Insert : ",toInsertData);
    
    let response = [{message: "Failed to register. Please try Again"}]
    let responseStatus = 400
    try {
        response = await db.insert(UsersTable).values(toInsertData).returning()
        responseStatus = 201

    } catch ({ name, message }) {
        if (`${message}`.includes("User Name is Taken, Please Try Some Other...!")) {
            response = [{ message: `Username has already been Added, Please Try Again...!` }]
        } else {

            response = [{ message: `Please Try Some Other...!` }]
        }
    }
    return { responseData: response, responseStatus: responseStatus }
}

export async function getUserByUsername(username) {
    return await db.select().from(UsersTable).where(eq(UsersTable.userName,username));;
}

export async function getUserByUserID(userID) {
    return await db.select({
        userName : UsersTable.userName
    }).from(UsersTable).where(eq(UsersTable.id,userID))
}


//Donations

export async function donation(donationData) {
    
    const newDonation = {name : donationData.name,idCardNumber: donationData.idCardNumber,phoneNumber: donationData.phoneNumber,address: donationData.address,state: donationData.state,type: donationData.type,occupation: donationData.occupation, wayOfIncome: donationData.wayOfIncome,purposeOfDonation: donationData.purposeOfDonation,targetReceiver: donationData.targetReceiver}

    let response = await db.insert(schema.DonationTable).values(newDonation).returning()
    let responseStatus = 201
    return { responseData: response, responseStatus: responseStatus }
    
}

export async function getAdmins(limit, offset) {
    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.UsersTable).limit(lookuoLimit).offset(loopupOffset).where(eq(UsersTable.type,"admin"));
}

export async function getDonors(limit, offset) {
    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.UsersTable).limit(lookuoLimit).offset(loopupOffset).where(eq(UsersTable.type,"donator"));
}


export async function getDonations(limit, offset) {
    const lookuoLimit = limit ? limit : 10
    const loopupOffset = offset ? offset : 0
    return await db.select().from(schema.DonationTable).limit(lookuoLimit).offset(loopupOffset);
}


