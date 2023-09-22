"use client";
import { useModal } from "@/contexts/ModalContext";
import DetailModal from "../detail-modal/DetailModal";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import formattedDate from "@/utils/formattedDate";


const LiveNewsFeed = ({
  className,
  isDescription,
  isCompanyName
}: {
  className?: string;
  isDescription?: boolean;
  isCompanyName?: boolean;
}) => {
    const { openModal } = useModal();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);

    useEffect(() => {      
        async function fetchInitialData() {
            setLoading(true);
            try {
              const cacheArticles = localStorage.getItem('storeArticles');

                  if (cacheArticles !== null && cacheArticles.length !== 0) {
                    const storeArticles = JSON.parse(cacheArticles);
                    setData(storeArticles);
                  } else {
                    const res = await fetch(`api/get-initial-data`, {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                      },
                      cache: 'no-store',
                    });
                  
                    if (res.ok) {
                      const articles = await res.json();
                      setData(articles);
                      // cached articles
                      localStorage.setItem('storeArticles', JSON.stringify(articles));
                    } else {
                      // Handle non-ok response (e.g., show a message to the user)
                      console.error('Error fetching data:', res.status, res.statusText);
                    }
                  }
            } catch (error) {
              // console.error('Error fetching initial data:', error);
            } finally{
              setLoading(false);
            }
          }
          
          fetchInitialData();
          const socket = io("https://live-news-feed-server-kappa.vercel.app");
          
          socket.on('connect', function () {
            console.log('connected');
          });
          
          socket.on('articles', function (article) {
              if (article.source.id !== 'sec-api') {
                if (data.length === 50) {
                  setData((prevData: any) => {
                    // update cached articles
                    localStorage.setItem('storeArticles', JSON.stringify([article, ...prevData.slice(0, -1) ]));
                    return [article, ...prevData.slice(0, -1) ]
                  });
                } else {
                  setData((prevData: any) => {
                    // update cached articles
                    localStorage.setItem('storeArticles', JSON.stringify([article, ...prevData]));
                    return [article, ...prevData]
                  });
                }
              }
          });
          
          return () => {
            socket.disconnect();
          };
    }, []);

  const loadingContent = [];

  for (let index = 0; index < 30; index++) {
    loadingContent.push(
      <div className="text-[11px] py-3 px-2 leading-5">
        <span
          className="
                        rounded-[4px]
                        text-black
                        bg-white
                        text-xs
                        w-14
                        h-5
                        text-center
                        px-2
                        py-1
                    "
        >
          AAPL
        </span>
        &nbsp;
            Boeing discovers new manufacturing flaw on 737 Max planes. Delays
            expected in deliveries due to issue with fastener holes. Inspections
            underway to assess affected planes. No impact on flight safety. $BA
            (CNBC)
      </div>
    );
  }

  if (loading) {
    return (
        <div>loading...</div>
    )
  }

  return (
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
        Live News Feed
      </h1>
      <hr className="my-2" />
      <div
        className={`
                overflow-y-auto
                flex
                flex-col
                divide-y
                divide-white
                ${className}
            `}
      >
        {data !== undefined && data.length !== 0
          ? data.map((item: any, index: number) => (
              <div className="text-[11px] py-3 px-2 leading-5 cursor-pointer flex items-start gap-3 hover:bg-black/25 transition-colors duration-150" onClick={() => openModal(item)} key={item.id}>
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
                    {isDescription && item.description}
                    {isCompanyName && item?.details?.companyName}
                    {!isDescription && !isCompanyName && item.title}
                    &nbsp;
                    <span
                        className="text-gray-600 font-medium"
                    >
                        {item.source.name}
                    </span>
                </div>
              </div>
            ))
          : loadingContent}
          <DetailModal />
      </div>
    </div>
  );
};

export default LiveNewsFeed;