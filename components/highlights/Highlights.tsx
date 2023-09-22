import React from 'react'
import listIcon from "../../public/list-circle.png"

async function fetchHighlightData() {
    const res = await fetch('https://static.newsfilter.io/landing-page/summary-of-briefs.html');

    const data = await res.text();
    
    return data;
}

const Highlights = async () => {
    const data = await fetchHighlightData();

  return (
    <div
        className='
            xl:w-3/5
            lg:w-2/3
            md:w-4/5
            w-full
            h-full
            p-8
            bg-black/20
            border
            border-gray-300
            rounded-md
            text-sm
        '
    >
        <div
            className='
                flex
                flex-col
                gap-3
                max-h-[420px]
                h-full
            '
        >
            <div>Highlights</div>
            {/* <ul
                className="
                    overflow-y-auto
                    list-inside
                    list-image-[url('/list-circle.png')]
                    flex
                    flex-col
                    gap-2
                    pr-1
                "
            >
                <li>Facebook is working on monetizing WhatsApp, which has potential in business messaging.</li>
                <li>MongoDB beats profit expectations and raises outlook for the year.</li>
                <li>Amgen Inc is given FTC approval for its acquisition of Horizon Therapeutics, Horizon's shares rise.</li>
                <li>Unemployment rate rose and wage growth slowed in August, but nonfarm payrolls exceeded expectations.</li>
                <li>Robinhood buys back shares from Emergent Fidelity Technologies, Robinhood shares rise.</li>
                <li>UBS predicts Chinese car manufacturers will double their global market share by 2030.</li>
                <li>Disney and Charter clash over distribution deal, leading to cable customer cancellations.</li>
                <li>Dell Tech, MongoDB, and Lululemon report positive financial results, stocks rise.</li>
                <li>Walgreens Boots Alliance CEO steps down as company faces declining COVID-19 sales.</li>
                <li>Broadcom shares drop due to weak revenue, but networking revenue is expected to rise.</li>
                <li>Nvidia Corp's market cap rises with strong profit forecasts and a share buyback, while Apple, Microsoft, Tencent, and Johnson & Johnson experience declines.</li>
                <li>Goldman Sachs division halts services for riskier fintech clients after US Federal Reserve warning.</li>
                <li>U.S. stock futures rise ahead of non-farm payrolls report, Broadcom down, Dell up.</li>
                <li>Ford offers 9% wage increase to UAW, but union seeks 40%.</li>
                <li>Novo Nordisk briefly surpasses LVMH as Europe's most valuable listed company.</li>
                <li>Amazon historically outperforms in September.</li>
                <li>Federal Reserve to maintain interest rates, economists revise growth forecasts.</li>
                <li>Palantir stock soared in 2023 but tumbled in August.</li>
                <li>Li Auto, NIO & XPeng delivered record-breaking numbers in August.</li>
                <li>Dell exceeds earnings expectations, plans to boost return of capital.</li>
                <li>Indian shares end 5-week losing streak, fastest economic growth in a year in Q1.</li>
                <li>Chinese EV makers Li Auto, NIO, and XPeng report record delivery numbers in August</li>
                <li>Tesla launches upgraded Model 3 in China with longer range and higher price</li>
                <li>Planned work stoppages at Chevron's LNG facilities in Australia may impact gas supplies and prices</li>
                <li>Honor releases Honor Magic V2 smartphone overseas, faces challenges in high-end market</li>
                <li>Broadcom projected to be second-largest AI semico. company in the US, with positive AI prospects</li>
                <li>US lawmakers address backlog of arms sales to Taiwan, Taiwan highlights growing threats from China</li>
                <li>Indian shares rise on strong Q1 GDP growth, metals sector gains on China's support</li>
                <li>ABB CEO disappointed in Chinese market development, concerns about China's economy</li>
                <li>Google DeepMind co-founder proposes ethical buyer criteria for Nvidia's AI chips</li>
                <li>US economy grows despite higher interest rates, stock outlook divided</li>
                <li>Thai food delivery startup Line Man Wongnai plans IPO in 2025</li>
                <li>Indian shares rise on China's housing support, with metal stocks gaining.</li>
                <li>Chevron workers in Australia reject pay offer, raising concerns for LNG exports.</li>
                <li>United Auto Workers union files unfair</li>
                <li>labor practice charges against General Motors & Stellantis.</li>
                <li>Florida-only insurers anticipate fewer losses from Hurricane Idalia, but Moody's warns of potential billions in claims.</li>
                <li>FTC settles antitrust concerns on Intercontinental Exchange's purchase of Black Knight.</li>
                <li>Lululemon raises profit & revenue forecasts for Q3.</li>
                <li>Dell Technologies raises full-year forecast due to AI boom.</li>
                <li>Boeing delivers 309 new aircraft in 7 months, increasing production of 737 Max.</li>
                <li>MongoDB and Dell surpass earnings expectations, Broadcom falls on soft guidance, VMware slightly misses estimates, Lululemon exceeds expectations.</li>
                <li>Delta Air Lines updates altimeters to address 5G interference.</li>
                <li>UPS is offering early retirement to 167 pilots due to weak air freight market and rising labor costs.</li>
                <li>The company hopes pilots will accept cash and healthcare benefits.</li>
                <li>This is the first time UPS is reducing pilot employment since 2010.</li>
                <li>FedEx pilots have rejected a contract deal, raising concerns about job security.</li>
            </ul> */}
            {data !== null && (
            <div 
                dangerouslySetInnerHTML={{ __html: data }}
                className="scrape-highlights overflow-y-auto"
            />
            )}
        </div>
    </div>
  )
}

export default Highlights