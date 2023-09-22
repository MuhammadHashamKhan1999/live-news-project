import React from 'react'

const TrendingStocksList = () => {
    const dummyData = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                dummyData.push('NVDA');
            } else if (i == 1) {
                dummyData.push('NTAP');
            } else if (i == 2) {
                dummyData.push('GM');
            } else if (i == 3 && j == 7) {
                dummyData.push('BBWI');
            }
        }
    }
  return (
    <div
        className='
            w-full
            border-2
            border-slate-300
            flex
            flex-col
            max-h-[332px]
        '
    >
        <div
            className='
                p-4
                text-xl
                font-semibold
                border-b-2
                border-slate-300
            '
        >
            Trending Stocks
        </div>
        <div
            className='
                py-1
                px-4
                w-full
                flex
                flex-col
                flex-wrap
                overflow-clip
            '
        >
            {dummyData.length !== 0 ? (
                dummyData.map((data, index: number) => (
                    <div
                        key={index}
                        className='
                            max-w-fit
                            text-[11px]
                            py-1
                        '
                    >
                        <div
                            className='
                                min-w-[56px]
                                rounded-[4px]
                                text-center
                                px-3
                                py-1
                                text-black
                                bg-white
                            '
                        >
                            {data}
                        </div>
                    </div>
                ))
            ) : null}
        </div>
    </div>
  )
}

export default TrendingStocksList;