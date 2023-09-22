"use client";
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';


const SearchPage = () => {
    const searchParams = useSearchParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const search = searchParams.get('searchQuery');

    useEffect(() => {
        const fetchQueryData = async () => {
            setLoading(true);
            
            try {
                const res = await fetch(`api/search-data`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ search }),
                cache: 'no-store',
                next: { revalidate: 120}
              });
            
              if (res.ok) {
                const articles = await res.json();
                setData(articles.articles);
              } 
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchQueryData();
    }, []);


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
        <div
            className={`
                flex
                flex-col
                2xl:w-[70%]
                lg:w-[80%]
                w-full
            `}
        >
      <h1
        className="
                font-semibold
                text-xl
                capitalize
            "
      >
        Search Result: "{search}"
      </h1>
      <hr className="my-2" />
      <div
        className={`
                overflow-y-auto
                flex
                flex-col
                divide-y
                divide-white
            `}
      >
        {data !== undefined && data.length !== 0
          ? data.map((item: any, index: number) => (
              <Link className="text-[11px] py-3 px-2 leading-5 cursor-pointer flex items-start gap-3 hover:bg-black/25 transition-colors duration-150" key={item.id} href={item.sourceUrl} target='_blank'>
                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-2
                        whitespace-nowrap
                    "
                >
                    {item?.details?.type !== undefined && item?.details?.type !== '' ? (
                        <div
                            className="
                                rounded-[4px]
                                bg-primary-2
                                text-white
                                min-w-[64px]
                                text-xs
                                text-center
                                px-2
                                py-1
                            "
                        >
                            {item.details.type}
                        </div>
                    ) : null}
                    {item.symbols.length !== 0 && item.symbols[0] !== '' ? (
                        <div
                            className="
                                rounded-[4px]
                                bg-white
                                text-black
                                text-xs
                                min-w-[64px]
                                max-w-fit
                                text-center
                                px-2
                                py-1
                            "
                        >
                            {item.symbols[0]}
                        </div>
                    ) : (
                        <div
                            className="
                                rounded-[4px]
                                bg-transparent
                                text-black
                                text-xs
                                min-w-[64px]
                                max-w-fit
                                text-center
                                px-2
                                py-1
                            "
                        />
                    )}
                </div>
                <div>
                    {item.title}
                    &nbsp;
                    <span
                        className="text-gray-600 font-medium"
                    >
                        {item.source.name}
                    </span>
                </div>
              </Link>
            ))
          : <div>Loading...</div>}
      </div>
    </div>
    </main>
  )
}

export default SearchPage