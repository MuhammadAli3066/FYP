import { saveLinkVisits } from "@/app/lib/db"
import { NextResponse } from "next/server"


export async function POST(request){
    const data = await request.json()
    console.log("Data:  ",data)
    const {linkId} = data
    console.log("Data ID:  ",linkId)
    const result = await saveLinkVisits(linkId)
    console.log("Saved Visits", result)
    return NextResponse.json({},{status: 201})
} 