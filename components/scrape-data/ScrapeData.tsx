"use client";

import useFetchArticle from "@/hooks/useFetchArticle";

const ScrapeData = ({ id }: { id: string }) => {
    const { article, loading, error } = useFetchArticle(id);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }
  return (
    <div
        className='w-full'
    >
        {article !== null && (
            <div 
                dangerouslySetInnerHTML={{ __html: article }}
                className="scrape-html"
            />
        )}
    </div>
  )
}

export default ScrapeData;