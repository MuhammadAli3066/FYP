import { NextResponse } from "next/server";
import { getUserByUsername } from "@/app/lib/db";
import { setSessionUser } from "@/app/lib/session";
import { isMatchingPassword, verifyPasswordWorking } from "@/app/lib/passwordUtils";


export async function POST(request){

    const data = await request.json()
    console.log("Login : ",data);

    const {userName,password} = data

    const toSaveData = {
        userName : userName,
        password : password
    }
    console.log("To Login : ",toSaveData);
    const userData = await getUserByUsername(userName)
    const getData = userData[0]
    console.log("PSWD : ",userData);
    const storedHashPass = getData.password
    const userId = getData.id
    const isValid = isMatchingPassword(password,storedHashPass)
    
    if(!isValid){
        return NextResponse.json({"message": `Invalid creds, Try Again`},{status : 400})
    }

    console.log("Welcome");
    await setSessionUser(userId)
    return NextResponse.json({"message":"Success"},{status : 200})

}

