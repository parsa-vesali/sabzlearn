import React from 'react'
import Title from './Title'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonIcon from '@mui/icons-material/Person';

import { articles } from "../Constant/index";

export default function Articles() {
    return (
        <>
            <Title title='وبلاگ آموزشی سبزلرن' subtitle='مقالات بروز برنامه نویسی' color='bg-yellow-500' >
                <button className='flex items-center gap-x-2 p-3 transition-all text-green-500 text-base lg:text-lg hover:bg-green-500 hover:text-gray-100 rounded-full '>
                    مشاهده
                    <span className='hidden lg:flex'>همه مقالات</span>
                    <KeyboardBackspaceOutlinedIcon />
                </button>
            </Title>

            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5 justify-items-center">
                {
                    articles.map(article => (
                        <div key={article.id} className="w-[340px] sm:w-[290px]  overflow-hidden rounded-xl bg-white dark:bg-dark-700  dark:text-gray-100 text-zinc-900 flex flex-col  shadow-lg ">
                            {/* Article BANNER  */}
                            <div className="h-42 relative overflow-hidden">
                                <img className='w-full h-full' src={article.img} alt="Article" />
                            </div>

                            <div className="pt-3 px-4">
                                {/* Article TITLE  */}
                                <div className=" flex flex-col space-y-4  pb-2 border-b border-b-neutral-200 dark:border-b-white/5">
                                    <h2 className='text-lg font-Dana-Bold cursor-pointer h-18 line-clamp-1'>{article.title}</h2>
                                    <p className='text-gray-400 line-clamp-4 text-sm'>{article.subTitle}</p>
                                    <div className="flex items-center justify-between">
                                        <span className=' text-gray-400 dark:text-gray-200 text-sm'>
                                            <PersonIcon />
                                            کامل بهرامی
                                        </span>
                                        <span className=' text-gray-400 dark:text-gray-200 text-sm'>
                                            <CalendarTodayOutlinedIcon style={{ fontSize: '1rem' }} />
                                            1403/01/20
                                        </span>
                                    </div>
                                </div>
                                {/* Article FOOTER  */}
                                <div className="py-4 flex items-center justify-center">
                                    <p className='text-lg dark:text-gray-100  dark:hover:text-green-500 hover:text-green-500 cursor-pointer transition-all '>
                                        مطالعه مقاله
                                        <ArrowCircleLeftOutlinedIcon className='mr-2' style={{ fontSize: '1.3rem' }} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
