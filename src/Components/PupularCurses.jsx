import React, { useState } from 'react'
import Title from '../Components/Title'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import { Courses } from '../Constant/index'
import GetPosts from '../Utils/GetPosts';
export default function PupularCurses() {

    const [allCourses, setAllCourses] = useState(Courses)
    const RandomCourses = () => {
        const shuffled = allCourses.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    }
    return (
        <>
            <Title title='محبوب ترین دوره ها' subtitle='سکوی پرتاپ شما به سمت موفقیت' color='bg-blue-500' >
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
