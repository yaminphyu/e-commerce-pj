import React, { useContext, useEffect, useState } from 'react';
import { Box, Skeleton } from "@mui/material";
import { DUMMY_DATA, MAIN_URL } from "../../dummy";
import Link from 'next/link';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { AddToCartContext } from '@/context/AddToCartContext';

export default function Products() {
    const { handleAddToCart } = useContext(AddToCartContext);

    const [ lastData, setLastData ] = useState([]);

    useEffect(() => {
        const new_arr = DUMMY_DATA && DUMMY_DATA.slice(0).slice(-8);
        setLastData(new_arr);
    }, [DUMMY_DATA])
    

    return (
        <section className="flex justify-center items-center py-28 bg-purple-100" id="products">
            <div className="w-[70%]">
                <div className="flex justify-between">
                    <h1 className="uppercase text-2xl text-purple-800">Products</h1>
                    <span>
                    <Link
                        href={"product-list"}
                        className="text-lg text-purple-500 hover:text-purple-800 underline"
                    >
                        More Detail...
                    </Link>
                    </span>
                </div>
                <div className="flex flex-wrap">
                    {
                        lastData.length > 0 ? lastData.map((data, key) => {
                        return (
                            <div className={`flex mt-10 ${key !== 3 && key !== 7 ? 'mr-5 pr-8' : ''}`} key={key}>
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
                        )
                        }): 
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
