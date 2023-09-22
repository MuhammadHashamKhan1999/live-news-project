import LiveNewsFeed from "@/components/live-news-feed/LiveNewsFeed";

export default async function () {
    return (
        <main
            className="
                w-full
                h-full
                flex
                justify-center
                py-8
                lg:py-12
                px-6
                sm:px-8
                lg:px-24
                2xl:px-32
            "
        >
            <LiveNewsFeed />
        </main>
    )
}