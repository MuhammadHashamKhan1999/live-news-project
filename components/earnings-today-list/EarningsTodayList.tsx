import React from 'react'

const EarningsTodayList = () => {
    const dummyData = [];

    for (let i = 0; i < 20; i++) {
        dummyData.push({
            class: 'FRO',
            name: 'Frontline',
            time: "02:00",
        })
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
            Earnings Today
        </div>
        <div
            className='
                py-1
                px-4
                flex
                flex-col
                w-full
                overflow-y-auto
            '
        >
            {dummyData.length !== 0 ? (
                dummyData.map((data, index: number) => (
                    <div
                        key={index}
                        className='
                            flex
                            items-start
                            gap-4
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
                            {data.class}
                        </div>
                        <div
                            className='
                                w-full
                                flex
                                items-center
                                justify-between
                            '
                        >
                            <div>
                                {data.name}
                            </div>
                            <div>
                                {data.time}
                            </div>
                        </div>
                    </div>
                ))
            ) : null}
        </div>
    </div>
  )
}

export default EarningsTodayList;