import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <div className='container bg-white dark:bg-dark-700 text-zinc-800 dark:text-gray-100 mt-20  py-8'>

            <div className="flex items-start flex-col lg:flex-row gap-y-5 justify-between   lg:child:w-[20%]">
                <ul className='space-y-5 text-zinc-500 dark:text-gray-300 child:cursor-pointer '>
                    <h2 className=' font-Dana-Bold text-xl  text-zinc-700 dark:text-white'>درباره ما</h2>
                    <li>سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند</li>
                </ul>

                <ul className=' space-y-5 text-zinc-500 dark:text-gray-300 child:cursor-pointer '>
                    <h2 className=' font-Dana-Bold text-xl  text-zinc-700 dark:text-white'>دسترسی سریع</h2>
                    <li>قوانین و مقررات</li>
                    <li>ارسال تیکت</li>
                    <li>همه دوره ها</li>
                </ul>

                <ul className='space-y-5 text-zinc-500 dark:text-gray-300 child:cursor-pointer '>
                    <h2 className='font-Dana-Bold text-xl  text-zinc-700 dark:text-white'>لینک های مفید</h2>
                    <li>آموزش جاوااسکریپت</li>
                    <li>آموزش پایتون</li>
                    <li>آموزش HTML</li>
                    <li>آموزش CSS</li>
                </ul>

                <ul className='flex flex-col items-start space-y-5 text-zinc-500 dark:text-gray-300'>

                    <h2 className=' font-Dana-Bold text-xl  text-zinc-700 dark:text-white'>شبکه های اجتماعی</h2>
                    <li className=' flex justify-center items-center gap-x-2 font-semibold'>
                        <span className='flex justify-center items-center p-1  bg-gradient-to-r from-[#FEDC15] via-[#F71F87] to-[#9000DC] rounded-full text-white' dir='ltr'><InstagramIcon style={{ fontSize: '1.2rem' }} /></span>
                        _sabzlearn@
                    </li>

                    <li className=' flex justify-center items-center gap-x-2 font-semibold'>
                        <span className='flex justify-center items-center p-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full text-white'><TelegramIcon style={{ fontSize: '1.2rem' }} /></span>
                        _sabzlearn@
                    </li>

                </ul>
            </div>

            <div className=" flex flex-col lg:flex-row space-y-4 items-center justify-between pt-4 border-t border-t-neutral-200 dark:border-t-white/10 mt-7 text-lg">
                <h2 className=''>ساخته شده با ❤️ توسط پارسا </h2>
                <a href='https://github.com/parsa-vesali' className='lg:font-Dana-Bold'>parsa-vesali <GitHubIcon /></a>
            </div>
        </div>
    )
}
