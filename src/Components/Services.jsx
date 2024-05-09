import React from 'react'
import Title from './Title'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

export default function Services() {
    return (
        <>
            <Title title='ما چه کمکی میتونیم بهت بکنیم' color='bg-sky-500' subtitle='از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره' />

            <div className="grid grid-rows-2 md:grid-cols-2 gap-6 sm:gap-7">

                <div className="flex items-center gap-x-10  bg-white dark:bg-dark-700 shadow-lg rounded-lg p-4">
                    <span className=' relative px-7 py-12 bg-sky-500/30 rounded-full'>
                        <AutoStoriesOutlinedIcon className=' absolute top-[30%]  -left-6 text-sky-500' style={{ fontSize: '3rem' }} />
                    </span>
                    <div className=" space-y-2">
                        <h2 className=' dark:text-gray-200 text-zinc-800 font-Dana-Bold text-xl'>تضمین کاملترین محتوا</h2>
                        <p className='dark:text-gray-400 text-gray-600'>بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</p>
                    </div>
                </div>


                <div className="flex items-center gap-x-10  bg-white dark:bg-dark-700 shadow-lg rounded-lg p-4">
                    <span className=' relative px-7 py-12 bg-yellow-500/30 rounded-full'>
                        <ModeCommentOutlinedIcon className=' absolute top-[30%]  -left-6 text-yellow-500' style={{ fontSize: '3rem' }} />
                    </span>
                    <div className=" space-y-2">
                        <h2 className=' dark:text-gray-200 text-zinc-800 font-Dana-Bold text-xl'>پشتیبانی دائمی</h2>
                        <p className='dark:text-gray-400 text-gray-600'>هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.</p>
                    </div>
                </div>


                <div className="flex items-center gap-x-10  bg-white dark:bg-dark-700 shadow-lg rounded-lg p-4">
                    <span className=' relative px-7 py-12 bg-green-500/30 rounded-full'>
                        <SignalCellularAltOutlinedIcon className=' absolute top-[30%]  -left-6 text-green-500' style={{ fontSize: '3rem' }} />
                    </span>
                    <div className=" space-y-2">
                        <h2 className=' dark:text-gray-200 text-zinc-800 font-Dana-Bold text-xl'>پروژه محور در راستای بازار کار</h2>
                        <p className='dark:text-gray-400 text-gray-600'>کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.</p>
                    </div>
                </div>

                <div className="flex items-center gap-x-10  bg-white dark:bg-dark-700 shadow-lg rounded-lg p-4">
                    <span className=' relative px-7 py-12 bg-red-500/30 rounded-full'>
                        <AutoStoriesOutlinedIcon className=' absolute top-[30%]  -left-6 text-red-500' style={{ fontSize: '3rem' }} />
                    </span>
                    <div className=" space-y-2">
                        <h2 className=' dark:text-gray-200 text-zinc-800 font-Dana-Bold text-xl'>سراغ حرفه ای ها رفتیم</h2>
                        <p className='dark:text-gray-400 text-gray-600'>به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
