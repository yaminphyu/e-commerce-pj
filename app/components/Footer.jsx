"use client"

import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRibbon } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

export default function Footer() {
    const path = window.location.pathname;

    return (
        <div className={`flex justify-center items-center custom-height ${ path == '/product-list' ? 'bg-purple-100' : 'bg-red-50'}`}>
            <div className="flex w-[80%] justify-center">
            <div className="flex">
                <span>
                <IoCartOutline className="text-3xl mr-3 text-purple-400" />
                </span>
                <div className="">
                <p className="uppercase text-xl">Free Delivery</p>
                <p className="w-[70%] mt-2">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="flex">
                <span>
                <FaRibbon className="text-3xl mr-3 text-purple-400" />
                </span>
                <div className="">
                <p className="uppercase text-xl">Quality Guarantee</p>
                <p className="w-[70%] mt-2">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="flex">
                <span>
                <MdLocalOffer className="text-3xl mr-3 text-purple-400" />
                </span>
                <div className="">
                <p className="uppercase text-xl">Daily Offers</p>
                <p className="w-[70%] mt-2">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="flex">
                <span>
                <MdOutlinePayment className="text-3xl mr-3 text-purple-400" />
                </span>
                <div className="">
                <p className="uppercase text-xl">100% Secure Payment</p>
                <p className="w-[70%] mt-2">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
