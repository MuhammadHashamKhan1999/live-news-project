"use client";

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import { useRef } from 'react';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { headerNavigationLinks } from '@/constants';
import Link from 'next/link';

const SideNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>()
  return (
    <>
        <div
            className='
                transition-colors
                duration-150
                rounded-xl
                hover:bg-black/25
                p-2
                text-3xl
                text-white
                lg:hidden
            '
            ref={btnRef}
            onClick={onOpen}
        >
            <HiBars3BottomLeft />
        </div>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent color={'black'}>
          <DrawerCloseButton />

          <DrawerBody>
          <nav
                className='
                    flex
                    flex-col
                    gap-3
                    mt-8
                    text-2xl
                    font-semibold
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
                            group
                            uppercase
                            tracking-wider
                        '
                        target={currentLink.isTarget ? '_blank' : ''}
                    >
                        {currentLink.label}
                        <div
                            className='
                                w-0
                                h-[2px]
                                rounded-3xl
                                bg-black
                                transition-all
                                duration-300
                                group-hover:w-full
                            '
                        />
                    </Link>
                ) )}
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideNav