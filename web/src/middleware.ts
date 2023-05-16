import { NextRequest, NextResponse } from "next/server";

export default function middelware(req: any) {
    return NextResponse.rewrite(req.nextUrl)
}

export const config = {
    matcher: ["/((?!.*\\.).*)", "/favicon.ico"],
}