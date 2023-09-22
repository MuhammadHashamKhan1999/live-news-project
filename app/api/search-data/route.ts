import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { search } = body;

        const query = JSON.stringify({
            "queryString": `\"${search}\" AND publishedAt:[now-4y/y TO *]`,
            "from": 0,
            "size": 100
          });

        const apiResponse = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: query,
                cache: 'no-store',
                next: { revalidate: 120}
              });

        if (apiResponse.ok) {
            const data = await apiResponse.json();
            
            return NextResponse.json(data, { status: 200 });
        }
    } catch (error) {
        console.log("SEARCH_DATA_ERROR: ", error);
        return new NextResponse('INTERNAL SERVER ERROR', { status: 500 });
    }
}