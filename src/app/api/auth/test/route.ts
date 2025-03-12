import { type NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){
    return NextResponse.json({ error: "Failed to login" }, { status: 200 });
}