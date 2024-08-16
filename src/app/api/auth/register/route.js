
import { NextResponse } from "next/server";
import {registerUser } from "@/app/lib/db";

export async function POST(request){

    const data = await request.json()
    console.log("Register : ",data);

    const {userName,userType,email,password,cnfrmPassword} = data

    if(password != cnfrmPassword){
        return NextResponse.json({"Message" : `Passwords Must Match` },{status : 400})
    }

    const toSaveData = {
        userName : data.userName,
        type: data.userType,
        password : data.password
    }
    if(email){
        toSaveData["email"] = data.email
    }
    console.log("To save : ",toSaveData);
    const dbResponse = await registerUser(toSaveData)
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}
