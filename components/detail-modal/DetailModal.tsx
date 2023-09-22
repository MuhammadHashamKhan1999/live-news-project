"use client";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
import { BsFillShareFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { DetailModalProps } from '@/types';
import { useModal } from '@/contexts/ModalContext';
import formattedDate from '@/utils/formattedDate';
import Link from 'next/link';
import Image from 'next/image';
import ScrapeData from '../scrape-data/ScrapeData';
import generateShareLinks from '@/utils/generateShareLinks';
import CopyLinkButton from '../copy-link-button/CopyLinkButton';

export const DetailModal = () => {
    const { modalContent, closeModal } = useModal();
    const disclosure = useDisclosure();

    if (!modalContent && !disclosure.isOpen) {
        return null;
    }

    const { id, publishedAt, title, symbols, sourceUrl, imageUrl, description } = modalContent;

    const articleUrl = `https://livenews.viplivealerts-pro.com/article/${id}`;

    const shareLinks = generateShareLinks(articleUrl, title);

  return (
    <div className='h-full'>
    <Modal onClose={closeModal} isOpen={modalContent !== null} isCentered size={'5xl'} scrollBehavior='inside' blockScrollOnMount={false}>
        <ModalOverlay bg={'blackAlpha.100'}/>
        <ModalContent color={'black'} p={0} my={'0'} mx={'20px'}>
          <ModalCloseButton color={'black'} />
          <ModalBody margin={0}>
            <div
                className='
                    flex
                    flex-col
                    gap-9
                    h-full
                    overflow-y-auto
                '
            >
                <div
                    className='
                        text-[11px]
                        text-gray-500
                        mt-3
                    '
                >
                    {formattedDate(publishedAt)}
                </div>
                <div
                    className='
                        text-lg
                        font-bold
                    '
                >
                    {title}
                </div>
                <div
                    className='
                        flex
                        items-start
                        justify-between
                        gap-6
                    '
                >
                    <div className='flex items-center flex-wrap gap-2'>
                    {symbols.map((symbol: string, index: number) => (
                        <div
                            key={index}
                            className='
                                py-1
                                px-2
                                text-gray-500
                                bg-slate-200
                                rounded-sm
                                text-xs
                            '
                        >
                            {symbol}
                        </div>
                    ))}
                    </div>
                    <Menu>
                        <MenuButton as={'button'}>
                            <div
                                className='
                                    flex
                                    justify-center
                                    gap-3
                                    items-center
                                '
                            >
                                <div
                                    className='
                                        text-lg
                                        font-bold
                                        text-black
                                    '                            
                                >
                                    <BsFillShareFill />
                                </div>
                                <div
                                    className='hover:underline text-sm'
                                >
                                    Share
                                </div>
                            </div>
                        </MenuButton>
                        <MenuList minWidth={'76px'} fontSize={'14px'}>
                            {shareLinks.map((link, index) => (
                                <MenuItem
                                    key={link.title}
                                >
                                    <Link
                                        className='
                                            flex
                                            items-center
                                            gap-2
                                            w-full
                                            p-1
                                            hover:bg-slate-200
                                        '
                                        href={link.shareUrl}
                                        target='_blank'
                                        referrerPolicy='no-referrer'
                                    >
                                        <div
                                            className='
                                                text-xl
                                            '
                                        >
                                            {index === 0 && <FaTwitter />}
                                            {index === 1 && <FaFacebook />}
                                            {index === 2 && <FaInstagram />}
                                        </div>
                                        <div>{link.title}</div>
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <CopyLinkButton textToCopy={articleUrl}/>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
            <hr className='text-gray-300 my-3'/>
            <div
                className='
                    w-full
                    flex
                    justify-center
                    items-center
                    py-12
                '
            >
                <div
                    className='
                        flex
                        flex-col
                        gap-12
                    '
                >
                    <ScrapeData id={id} />
                    <Link target='_blank' href={`${sourceUrl}`} className='text-sm underline'>Link to  original article</Link>
                </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default DetailModal