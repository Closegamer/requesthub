import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const defaultString = 'http://localhost:3000'
    // @ts-ignore
    const remoteUrl: string  = request.nextUrl.searchParams.get('remoteUrl')
    if(!remoteUrl) return NextResponse.json({ method: 'GET', result: {}, errors: ['no remoteUrl'] }, { status: 200 });
    // @ts-ignore
    const host: string = request.nextUrl.searchParams.get('host') ? request.nextUrl.searchParams.get('host') : defaultString
    // @ts-ignore
    const referer: string = request.nextUrl.searchParams.get('referer') ? request.nextUrl.searchParams.get('referer') : defaultString
    const response = await fetch(remoteUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Host': host,
            'Referer': referer
        },
    });
    const result = await response.text()
    return NextResponse.json({ method: 'GET', result: result }, { status: 200 });
}