import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'
import MainHeader from '../Components/MainHeader'
import Title from '../Components/Title'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

export default function Home() {
    return (
        <>
            <div className='container py-8 bg-gray-100 dark:bg-dark-900 text-zinc-600 dark:text-gray-100'>
                <Notifications />
            </div>
            <NavBar />
            <div className="container">
                <MainHeader />
                <Title title='آخرین دوره های سبزلرن' subtitle='سکوی پرتاپ شما به سمت موفقیت' color='bg-yellow-400' >
                    <button className='flex items-center gap-x-2 p-3 transition-all text-green-500 text-base lg:text-lg hover:bg-green-500 hover:text-gray-100 rounded-full '>
                        مشاهده
                        <span className='hidden lg:flex'>همه دوره ها</span>
                        <KeyboardBackspaceOutlinedIcon />
                    </button>
                </Title>
            </div>
        </>
    )
}
