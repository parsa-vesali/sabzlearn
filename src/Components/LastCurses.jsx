import React, { useState } from 'react'
import Title from '../Components/Title'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import { Courses } from '../Constant/index'
export default function LastCurses() {

    const [allCourses, setAllCourses] = useState(Courses)
    const RandomCourses = () => {
        const shuffled = allCourses.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 12);
    }
    return (
        <>
            <Title title='آخرین دوره های سبزلرن' subtitle='سکوی پرتاپ شما به سمت موفقیت' color='bg-yellow-400' >
                <button className='flex items-center gap-x-2 p-3 transition-all text-green-500 text-base lg:text-lg hover:bg-green-500 hover:text-gray-100 rounded-full '>
                    مشاهده
                    <span className='hidden lg:flex'>همه دوره ها</span>
                    <KeyboardBackspaceOutlinedIcon />
                </button>
            </Title>
            <div className='grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 gap-3.5 md:gap-5'>

                {
                    RandomCourses().map(course => (
                        <div className=" w-[300px]  overflow-hidden rounded-lg bg-white dark:bg-dark-700  dark:text-gray-100 text-zinc-900 flex flex-col gap-y-1 shadow ">
                            {/* COURSE BANNER  */}
                            <div className="h-42 relative rounded-lg overflow-hidden">
                                <img className='w-full h-full' src={course.img} alt="course" />
                            </div>

                            <div className="pt-2 px-4">
                                {/* COURSE TITLE  */}
                                <div className=" flex flex-col space-y-4  pb-4 border-b border-b-neutral-200 dark:border-b-white/5">
                                    <h2 className='text-lg font-Dana-Bold cursor-pointer h-14'>{course.title}</h2>
                                    <p className='text-gray-400 line-clamp-2'>{course.subtitle}</p>
                                    <div className="flex items-center justify-between">
                                        <span className='text-gray-200'>
                                            <PersonIcon />
                                            {course.teacher}
                                        </span>
                                        <span className=' text-yellow-500'>
                                            5.0
                                            <StarIcon style={{ fontSize: '1.3rem' }} />
                                        </span>
                                    </div>
                                </div>
                                {/* COURSE FOOTER  */}
                                <div className="py-2 flex items-center justify-between">
                                    <span className='flex items-center  gap-x-1 text-sm'>
                                        <PeopleIcon style={{ fontSize: '1.3rem' }} />
                                        {course.student}
                                    </span>
                                    <span className='text-green-500 flex items-center gap-x-1'>
                                        <p className='text-lg font-Dana-Bold'>{course.price}</p>
                                        <p className='text-xs'>تومان</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </>
    )
}
