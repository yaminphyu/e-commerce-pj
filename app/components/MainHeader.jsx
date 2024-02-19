"use client"

import { AddToCartContext } from '@/context/AddToCartContext';
import { Badge, Box } from '@mui/material';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

export default function MainHeader() {

    const path = window.location.pathname;

    const { addToCart } = useContext(AddToCartContext);

    const [ cartArr, setCartArr ] = useState();

    useEffect(() => {
        setCartArr(addToCart.length);
    }, [addToCart])
    
    return (
        <div className='flex items-center justify-between w-full border bg-purple-100 h-24 top-0 fixed z-50'>
            <div>
                <h1 className='font-normal text-3xl mx-5'>
                    <Link
                        href={'/'}
                    >
                        Jerry Pie's Shop.
                    </Link>
                </h1>
            </div>
            <div className='flex w-[50%] justify-end'>
                <div className='mr-24'>
                    <ul className='flex'>
                        <li className='mr-10 uppercase text-base font-normal hover:text-purple-600'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='mr-10 uppercase text-base font-normal hover:text-purple-600'>
                            <Link href={'/product-list'}>Products</Link>
                        </li>
                        <li className='mr-10 uppercase text-base font-normal hover:text-purple-600'>
                            <Link href={'#'} onClick={() => alert('Comming soon...')}>Favorite</Link>
                        </li>
                        <li className='mr-10 uppercase text-base font-normal hover:text-purple-600'>
                            <Link href={'#'} onClick={() => alert('Comming soon...')}>Sale</Link>
                        </li>
                        <li className='mr-10 uppercase text-base font-normal hover:text-purple-600'>
                            <Link href={'#'} onClick={() => alert('Comming soon...')}>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex'>
                    <Link 
                        href={'/'}
                        className='mr-8 hover:text-purple-600'
                    >
                        <FiSearch className='text-xl' />
                    </Link>
                    <Link 
                        href={'/profile'}
                        className='mr-8 hover:text-purple-600'
                    >
                        <IoPerson className='text-xl' />
                    </Link>
                    <Link 
                        href={'/add-to-cart'}
                        className={`mr-8 hover:text-purple-600 ${cartArr ? 'text-purple-600' : 'text-gray-900'}`}
                    >
                        <Badge badgeContent={cartArr > 0 && cartArr} className='mb-2'>
                            <LuShoppingCart className='text-xl' />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    )
}
