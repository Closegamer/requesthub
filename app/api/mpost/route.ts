import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const host = request.headers.get('host')
    console.log('request.headers',request.headers)

    return NextResponse.json({ success: true }, { status: 401 });
}