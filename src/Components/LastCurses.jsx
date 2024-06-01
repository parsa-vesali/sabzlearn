import React, { useState } from 'react'
import Title from '../Components/Title'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import GetPosts from '../Utils/GetPosts';


export default function LastCurses() {




    return (
        <>
            <Title title='آخرین دوره های سبزلرن' subtitle='سکوی پرتاپ شما به سمت موفقیت' color='bg-yellow-400' >
                <button className='flex items-center gap-x-2 p-3 transition-all text-green-500 text-base lg:text-lg hover:bg-green-500 hover:text-gray-100 rounded-full '>
                    مشاهده
                    <span className='hidden lg:flex'>همه دوره ها</span>
                    <KeyboardBackspaceOutlinedIcon />
                </button>
            </Title>
           
           <GetPosts postCounte={8} />
        </>
    )
}
