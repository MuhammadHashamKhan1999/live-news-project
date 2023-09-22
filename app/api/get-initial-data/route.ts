import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const query = JSON.stringify({
            "queryString": "NOT source.id:sec-api AND publishedAt:[now-1h TO *]",
            "from": 0,
            "size": 30
        });

        const apiResponse = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: query,
            cache: 'no-store',
        });

        if (apiResponse.ok) {
            const data = await apiResponse.json();

            return NextResponse.json(data.articles, { status: 200 });
        } else {
            return new NextResponse("Fetch Error", { status: 400 });
        }
    } catch (error) {
        console.log('API-GET-INITIAL-DATA', { status: 500 });
    }
}