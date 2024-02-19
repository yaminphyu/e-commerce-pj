"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function productDetail() {
  const router = useRouter();
  console.log('router >> ', router);
  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-[80%]'>
        <h1>hello</h1>
      </div>
    </div>
  )
}
