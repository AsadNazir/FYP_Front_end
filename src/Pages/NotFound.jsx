import React from 'react'
import { Button } from 'flowbite-react'
import { HiShoppingCart } from "react-icons/hi";

export default function NotFound() {
    return (
        <div className='w-full h-[99vh] justify-center flex items-center'>
            <div className='max-w-[600px]'>
                <h1 className='text-9xl text-center text-gray-400'>404</h1>
                <h1 className='text-3xl text-center text-gray-400'>Page not found</h1>
                <div  className='my-8'>
                    <Button gradientDuoTone="purpleToBlue" size="xl" className='w-full'>
                        <HiShoppingCart className="mr-2 h-5 w-5" />
                        Buy now
                    </Button>
                </div>
            </div>


        </div>
    )
}
