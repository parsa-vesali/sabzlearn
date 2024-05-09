import React from 'react'
import Title from './Title'
import { GoShieldCheck } from "react-icons/go";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";
import { CiLaptop } from "react-icons/ci";


export default function RoadMap() {
    return (
        <>
            <Title title='نقشه راه ها' color='bg-red-600' subtitle='نقشه های راه برای شروع اصولی یادگیری' />

            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 child:py-5 child:text-gray-200 child:flex child:rounded-2xl'>
                {/* box */}
                <div className=' lg:w-72 bg-gradient-to-r from-[#FFB535] to-[#F2295B]   flex-col justify-center items-center gap-y-2'>
                    <CiLaptop className='  text-5xl' />
                    <h2 className='text-xl font-Dana-Bold'>فرانت اند</h2>
                    <span>28 دوره</span>
                </div>
                <div className=' lg:w-72 bg-gradient-to-r from-[#30C5E4] to-[#28E55D] flex-col justify-center items-center gap-y-2'>
                    <GoShieldCheck className='  text-5xl' />
                    <h2 className='text-xl font-Dana-Bold'>امنیت</h2>
                    <span>9 دوره</span>
                </div>
                <div className=' lg:w-72 bg-gradient-to-r from-[#2E9EFF] to-[#9C33F7] flex-col justify-center items-center gap-y-2'>
                    <BsCodeSlash className='  text-5xl' />
                    <h2 className='text-xl font-Dana-Bold'>پایتون</h2>
                    <span>8 دوره</span>
                </div>
                <div className=' lg:w-72 bg-gradient-to-r from-[#FF3571] to-[#880175] flex-col justify-center items-center gap-y-2'>
                    <IoExtensionPuzzleOutline className='  text-5xl' />
                    <h2 className='text-xl font-Dana-Bold'>مهارت های نرم</h2>
                    <span>6 دوره</span>
                </div>
            </div>
        </>
    )
}
