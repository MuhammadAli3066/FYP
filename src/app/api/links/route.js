import isValidURL from "@/app/lib/isValidURL";
import { NextResponse } from "next/server";
import { addLink } from "@/app/lib/db";
import { getLink,getLinkAndVisits } from "@/app/lib/db";

export async function GET(request){
    const link = await getLinkAndVisits(100,0); 
    return NextResponse.json(link,{status:200})
}


export async function POST(request){

    const data = await request.json()
    const url = data && data.url ? data.url : null
    const validURL = await isValidURL(url, ["jref.io"])  
    if(!validURL){
        return NextResponse.json({"error" : `${url} is Invalid URL` },{status : 400})
    } 
    const dbResponse = await addLink(url)
    const {responseData, responseStatus} = dbResponse
    return NextResponse.json(responseData,{status : responseStatus})
}

