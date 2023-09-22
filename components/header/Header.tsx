import React from 'react'
import { headerNavigationLinks } from '@/constants';
import Link from 'next/link';
import SideNav from '../side-nav/SideNav';

const Header = () => {
  return (
    <header
        className='
            flex
            justify-center
            w-full
            px-6
            sm:px-8
            lg:px-20
            py-4
        '
    >
        <div
            className='
                flex
                lg:items-start
                items-center
                justify-between
                lg:justify-start
                w-full
                gap-6
                2xl:gap-12
            '
        >
            <Link
                href={'/'}
                className='
                    text-xs
                    font-bold
                    uppercase
                '
            >
                <span
                    className='
                        text-primary-2
                    '
                >
                    VIP
                </span>
                &nbsp;
                LIVEALERTS-PRO
            </Link>
            <SideNav />
            <nav
                className='
                    hidden
                    lg:flex
                    justify-center
                    gap-5
                    xl:gap-8
                    flex-wrap
                    xl:w-[76%]
                '
            >
                {headerNavigationLinks.map((currentLink) => (
                    <Link
                        key={currentLink.label}
                        href={currentLink.href}
                        className='
                            font-semibold
                            text-[11px]
                            transition-colors
                            duration-150
                            hover:text-gray-300
                            uppercase
                            flex
                        '
                        target={currentLink.isTarget ? '_blank' : ''}
                    >
                        {currentLink.label}
                        {currentLink.label === 'Live News Feed' && (
                            <div
                                className='
                                    bg-orange-500
                                    rounded-md
                                    ml-1
                                    text-[8px]
                                    font-bold
                                    px-1
                                    py-0.5
                                    my-auto
                                    max-h-fit
                                '
                            >
                                Live
                            </div>
                        )}
                    </Link>
                ) )}
            </nav>
        </div>
    </header>
  )
}

export default Header