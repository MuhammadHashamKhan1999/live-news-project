import EarningsTodayList from '@/components/earnings-today-list/EarningsTodayList';
import Highlights from '@/components/highlights/Highlights';
import LiveNewsFeed from '@/components/live-news-feed/LiveNewsFeed';
import NewsList from '@/components/news-list/NewsList';
import SearchBar from '@/components/search-bar/SearchBar';
import TrendingStocksList from '@/components/treding-stocks-list/TrendingStocksList';

async function getBriefsData() {

  const query = JSON.stringify({
    "queryString": "(NOT source.id:sec-api AND symbols:*) AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getPRData() {

  const query = JSON.stringify({
    "queryString": "(source.id:prNewswire OR source.id:businesswire) AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getWallStreetData() {

  const query = JSON.stringify({
    "queryString": "source.id:wall-street-journal AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getBloombergData() {

  const query = JSON.stringify({
    "queryString": "source.id:bloomberg AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getFCCFilingData() {

  const query = JSON.stringify({
    "queryString": "source.id:fccFilings AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getFDAApprovalData() {

  const query = JSON.stringify({
    "queryString": "source.id:usFda (usFdaType = drugApproval) AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://livenews.viplivealerts-pro.com/api/fda-articles`);

  if (res.ok) {
    const articles = await res.json();
    return articles;
  }
}

async function getEarningCallData() {

  const query = JSON.stringify({
    "queryString": "source.id:earningsCallTranscripts AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getReuterData() {

  const query = JSON.stringify({
    "queryString": "source.id:reuters AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getCNBCData() {

  const query = JSON.stringify({
    "queryString": "source.id:cnbc AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getBarronData() {

  const query = JSON.stringify({
    "queryString": "source.id:barrons AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

async function getSAndPGlobalData() {

  const query = JSON.stringify({
    "queryString": "source.id:sandpGlobal AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

// async function getContractAwardData() {

//   const query = JSON.stringify({
//     "queryString": "source.id:sandpGlobal AND publishedAt:[now-30d/d TO *]",
//     "from": 0,
//     "size": 30
//   });

//   const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: query
//   });

//   if (res.ok) {
//     const articles = await res.json();
//     return articles.articles;
//   }
// }

async function getSECFilingData() {

  const query = JSON.stringify({
    "queryString": "source.id:sec-api AND publishedAt:[now-30d/d TO *]",
    "from": 0,
    "size": 30
  });

  const res = await fetch(`https://api.newsfilter.io/search?token=${process.env.NEWS_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: query,
    cache: 'no-store',
    next: { revalidate: 120}
  });

  if (res.ok) {
    const articles = await res.json();
    return articles.articles;
  }
}

const loadingContent = [];

for (let index = 0; index < 30; index++) {
  loadingContent.push(
    <div className="text-[11px] py-3 px-2 leading-5">
      <span
        className="
                      rounded-[4px]
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

export default async function Home() {
  const briefsData = await getBriefsData();
  const prData = await getPRData();
  const wallStreetData = await getWallStreetData();
  const bloombergData = await getBloombergData();
  // const FCCFilingData = await getFCCFilingData();
  const FDAApprovalData = await getFDAApprovalData();
  // const earningReportData = await getEarningReportData();
  const earningCallData = await getEarningCallData();
  const reuterData = await getReuterData();
  const CNBCData = await getCNBCData();
  const barronData = await getBarronData();
  const SAndPGlobalData = await getSAndPGlobalData();
  // const contractAwardData = await getContractAwardData();
  const SECFilingData = await getSECFilingData();
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
      <section
        id='search-bar'
        className='
          w-full
          flex
          justify-center
          mb-10
        '
      >
        <SearchBar />
      </section>
      <section
        id='highlights'
        className='
          w-full
          flex
          justify-center
          mb-10
        '
      >
        <Highlights />
      </section>
      <section
        id='1'
        className='
          grid
          grid-cols-1
          md:grid-cols-2
          gap-9
          xl:gap-12
          2xl:gap-16
        '
      >
        <div>
          <NewsList title='Briefs' className='max-h-[1434px] h-full' data={briefsData} isDescription/>
        </div>
        <div
          className='
            flex
            flex-col
            gap-9
          '
        >
          <NewsList title='Press Releases' className='max-h-[424px] h-full' data={prData}/>
          <NewsList title='Wall Street Journal' className='max-h-[424px] h-full' data={wallStreetData}/>
          <NewsList title='Bloomberg' className='max-h-[424px] h-full' data={bloombergData}/>
        </div>
      </section>
      <section
        id='2'
        className='
          grid
          grid-cols-1
          md:grid-cols-2
          gap-9
          xl:gap-12
          2xl:gap-16
          mt-20
        '
      >
        <div>
          {/* <NewsList title='IPO Filings' className='max-h-[424px] h-full'/> */}
          <NewsList title='Earnings Call Transcript' className='max-h-[424px] h-full' data={earningCallData}/>
        </div>
        <div
          className='
            flex
            flex-col
            gap-9
          '
        >
          <NewsList title='FDA Approval' className='max-h-[424px] h-full' data={FDAApprovalData}/>
        </div>
      </section>
      {/* Earnings Today & Trending stocks */}
      {/* <section
        id='3'
        className='
          grid
          grid-cols-1
          md:grid-cols-2
          gap-9
          xl:gap-12
          2xl:gap-16
          mt-20
        '
      >
        <div className='lg:px-16'>
          <EarningsTodayList />
        </div>
        <div className='lg:px-16'>
          <TrendingStocksList />
        </div>
      </section> */}
      <section
        id='4'
        className='
          grid
          grid-cols-1
          md:grid-cols-2
          gap-9
          xl:gap-12
          2xl:gap-16
          mt-20
        '
      >
        <div>
          <NewsList title='Reuters' className='max-h-[424px] h-full' data={reuterData}/>
        </div>
        <div
          className='
            flex
            flex-col
            gap-9
          '
        >
          <NewsList title='CNBC' className='max-h-[424px] h-full' data={CNBCData}/>
        </div>
      </section>
      <section
        id='5'
        className='
          grid
          grid-cols-1
          md:grid-cols-2
          gap-9
          xl:gap-12
          2xl:gap-16
          mt-20
        '
      >
        <div>
          <NewsList title='Barrons' className='max-h-[424px] h-full' data={barronData}/>
        </div>
        <div
          className='
            flex
            flex-col
            gap-9
          '
        >
          <NewsList title='S&P Global' className='max-h-[424px] h-full' data={SAndPGlobalData}/>
        </div>
      </section>
      <section
        id='6'
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
        <NewsList title='SEC Filings' className='max-h-[424px] h-full' data={SECFilingData} isCompanyName/>
      </section>
    </main>
  )
}
