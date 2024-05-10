import React from 'react'
import Title from './Title'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

export default function Articles() {
    return (
        <>
            <Title title='جدیدترین دوره ها' subtitle='یادگیری و رشد توسعه فردی' color='bg-yellow-500' >
                <button className='flex items-center gap-x-2 p-3 transition-all text-green-500 text-base lg:text-lg hover:bg-green-500 hover:text-gray-100 rounded-full '>
                    مشاهده
                    <span className='hidden lg:flex'>همه مقالات</span>
                    <KeyboardBackspaceOutlinedIcon />
                </button>
            </Title>

        </>
    )
}
