import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const apiResponse = await fetch('https://static.newsfilter.io/landing-page/articles-fda.json');

        if (apiResponse.ok) {
            const data = await apiResponse.json();
            return NextResponse.json(data, { status: 200 });
        }
    } catch (error) {
        console.log("FDA_ARTICLES_ERROR: ", error);
        return new NextResponse('INTERNAL SERVER ERROR', { status: 500 });
    }
}