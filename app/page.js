"use client"

import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import { useAnimationControls, useScroll, motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Products from "./components/Products";


export default function Home() {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
      return scrollYProgress.on('change', (latestValue) => {
          if (latestValue > 0.5) {
              controls.start('show');
          } else {
              controls.start('hide');
          }
      });
  });

  return (
    <React.Fragment>
      <div className="">
        <div className="flex flex-col justify-center items-center w-full bg-red-50 h-screen">
          <div className="flex w-full justify-center">
            <div className="w-[30%] flex flex-col justify-center items-start">
              <div className="mr-24">
                <h3 className="uppercase font-normal text-5xl text-wrap mb-10">Your Product are Great.</h3>
              </div>
              <div>
                <Button variant="outlined" className="border-purple-400 text-purple-400 hover:border-yellow-500 hover:text-yellow-500">Shop Product</Button>
              </div>
            </div>
            <div>
              <Image 
                width={300}
                height={300}
                alt="Image"
                src={'/images/tulip.jpeg'}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="bottom-0 mt-36 animate-bounce">
            <button onClick={() => {
              document.getElementById('products').scrollIntoView({
                'behavior' : "smooth"
              })
            }}><FiArrowDown className="text-8xl text-purple-400 border border-purple-600 rounded-full p-4" /></button>
          </div>
        </div>
        <motion.button
            className="fixed bottom-0 right-0 mr-8 mb-10 border border-violet-300 p-3 rounded-lg"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <FaArrowUp className="text-4xl text-violet-500" />
        </motion.button>
      </div>

      <Products />
      
    </React.Fragment>
  );
}
