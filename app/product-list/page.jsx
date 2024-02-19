"use client"

import { DUMMY_DATA } from '@/dummy'
import { Box, Button, IconButton, Skeleton, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import qs from 'qs'
import { AddToCartContext } from '@/context/AddToCartContext'

export default function ProductList() {
    const { handleAddToCart } = useContext(AddToCartContext);
    
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        let p = qs.parse(window.location.search, { ignoreQueryPrefix: true }).page ?? 1;
        setPage(p);
    }, [window.location.search]);

    const [active, setActive] = useState(1);
    const next = () => {
        if (active === total_page) return;
        
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    let limit = 8;
    let total_page = Math.floor(DUMMY_DATA?.length / limit);
    let data = DUMMY_DATA?.slice((page - 1) * limit, (limit * page));
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        setDataArray([...dataArray, ...data]);
    }, [active])

    return (
        <section className="flex justify-center items-center pt-12 pb-28 bg-red-50" id="products">
            <div className="w-[70%]">
                <div className="flex justify-between">
                    <h1 className="uppercase text-2xl text-purple-800">All Products</h1>

                    <div className="flex items-center gap-4">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <RiArrowLeftSLine className="h-7 w-7" />
                        </IconButton>
                        <Typography color="gray" className="font-normal">
                            Page <strong className="text-gray-900">{active}</strong> of{" "}
                            <strong className="text-gray-900">{total_page}</strong>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={next}
                            disabled={active === total_page}
                        >
                            <RiArrowRightSLine className="h-7 w-7" />
                        </IconButton>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {
                        dataArray.length > 0 ? dataArray.map((data, key) => {
                            let key_id = key + 1;

                            return (
                                <>
                                    <div className={`flex mt-10 ${key_id / 4 !== 0 ? 'mr-3 pr-7' : ''}`} key={key}>
                                        <div className="flex flex-col mb-2 overflow-hidden pb-3">
                                            <div className='overflow-hidden rounded-md'>
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    alt="product list"
                                                    src={`/images/${data.image}`}
                                                    loading="lazy"
                                                    className="max-h-[320px] max-w-[280px] rounded-md cursor-pointer  hover:scale-110 transition duration-500"
                                                    onClick={(e) => window.location.href = `${MAIN_URL}/product-detail/${data.title}`}
                                                />
                                            </div>
                                            <h3 className="flex justify-center text-lg font-light mt-2 hover:text-purple-600">
                                                <Link href={`/product-detail/${data.title}`}>{data.title}</Link>
                                            </h3>
                                            <div className="flex justify-between">
                                                <h3 className="text-lg font-light mt-2 hover:text-purple-600">
                                                    {data.price}
                                                </h3>
                                                <div
                                                    className='flex text-purple-700 rounded-3xl px-4 py-2 border border-red-50 bg-red-50 shadow-md shadow-purple-400/50 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 hover:shadow-yellow-500/50 mt-2'
                                                    onClick={(e) => handleAddToCart(e, data.id)}
                                                >
                                                    <IoCartOutline className='mr-2 mt-1' /> Add to Cart
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }) :
                            <Box className="w-full mt-10">
                                <Skeleton />
                                <Skeleton animation="wave" />
                                <Skeleton animation={false} />
                            </Box>
                    }
                </div>
            </div>
        </section>
    )
}
