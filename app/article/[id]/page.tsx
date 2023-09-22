"use client";

import useFetchArticle from "@/hooks/useFetchArticle";

export default function ArticlePage({ params }: { params: { id: string }}) {
    const { article, loading, error } = useFetchArticle(params.id);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }
  return (
    <main
        className='
            py-8
            lg:py-12
            px-6
            sm:px-8
            lg:px-24
            2xl:px-32
            h-full
        '
    >
        {article !== null && (
            <div 
                dangerouslySetInnerHTML={{ __html: article }}
                className="scrape-html"
            />
        )}
    </main>
  )
}