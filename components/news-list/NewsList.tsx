"use client";
import formattedDate from "@/utils/formattedDate";
import { useModal } from "@/contexts/ModalContext";
import DetailModal from "../detail-modal/DetailModal";


const NewsList = ({
  title,
  className,
  data,
  isDescription,
  isCompanyName
}: {
  title: string;
  className: string;
  data?: any[] | undefined;
  isDescription?: boolean;
  isCompanyName?: boolean;
}) => {
    const { openModal } = useModal();

    const uniqueData = data
        ? data.filter((item: any, index: number, self: any[]) => {
            // Filter out items with the same ID that have already been seen
            return (
                self.findIndex((otherItem) => otherItem.id === item.id) === index
            );
            })
        : [];

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

  return (
    <div
      className={`
            flex
            flex-col
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
        {title}
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
        {uniqueData !== undefined && uniqueData.length !== 0
          ? uniqueData.map((item: any, index: number) => (
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
                        {formattedDate(item.publishedAt)}
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

export default NewsList;
