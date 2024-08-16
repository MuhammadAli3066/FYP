import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({item : [{id: "1", title: "POST 1" },{id: "2", title: "POST 2" },{id: "3", title: "POST 3" }]});
}
