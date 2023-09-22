"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery((prevSearchQuery) => (e.target.value));
    };

    const handleSearch = () => {
        router.push(`/search?searchQuery=${searchQuery}`);
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
  return (
    <div
        className='
            mx-auto
            flex
            items-center
            xl:w-3/5
            lg:w-2/3
            md:w-4/5
            sm:w-80
            w-full
            rounded-full
            border
            border-gray-300
            text-sm
            search-bar-animation
        '
    >
        <div
            className='w-full'
        >
            <input 
                placeholder='Search, eg. TSLA or Earnings'
                name='searchQuery'
                onChange={handleChange}
                value={searchQuery}
                className='
                    placeholder:text-gray-500
                    w-full
                    rounded-l-full
                    px-6
                    py-2
                    bg-transparent
                    focus:outline-none
                '
            />
        </div>
        <div
            className='
                rounded-r-full
                px-12
                py-2
                bg-primary-1/80
                hover:bg-primary-1
                transition-colors
                duration-150
                text-base
                font-medium
                cursor-pointer
            '
            onKeyDown={handleKeyDown}
            onClick={handleSearch}
        >Search</div>
    </div>
  )
}

export default SearchBar