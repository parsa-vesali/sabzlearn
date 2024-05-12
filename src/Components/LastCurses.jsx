import React, { useState } from 'react'
import Title from '../Components/Title'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import { Courses } from '../Constant/index'
import { Link } from 'react-router-dom';
export default function LastCurses() {

    const [allCourses, setAllCourses] = useState(Courses)
    const RandomCourses = () => {
        const shuffled = allCourses.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
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
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5 justify-items-center'>
                {
                    RandomCourses().map(course => (
                        <div key={course.id} className=" w-[340px] sm:w-[290px]  overflow-hidden rounded-xl bg-white dark:bg-dark-700  dark:text-gray-100 text-zinc-900 flex flex-col  shadow-lg ">
                            {/* COURSE BANNER  */}
                            <div className="h-42 relative rounded-xl overflow-hidden">
                                <img className='w-full h-full' src={course.img} alt="course" />
                                {
                                    course.price === 'رایگان!' ? (
                                        <span className=' absolute top-3 right-3 rounded-full bg-green-600 text-sm flex items-center justify-center py-1 px-3.5'>100%</span>
                                    ) : ''
                                }
                            </div>

                            <div className="pt-3 px-4">
                                {/* COURSE TITLE  */}
                                <div className=" flex flex-col space-y-4  pb-2 border-b border-b-neutral-200 dark:border-b-white/5">
                                    <Link to='/main-course' className='text-lg font-Dana-Bold cursor-pointer h-14 line-clamp-2'>{course.title}</Link>
                                    <p className='text-gray-400 line-clamp-2 text-sm'>{course.subtitle}</p>
                                    <div className="flex items-center justify-between">
                                        <span className=' text-gray-400 dark:text-gray-200 text-sm'>
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
                                    <span className='flex items-center  gap-x-1 text-sm  text-gray-500 dark:text-gray-100 '>
                                        <PeopleIcon style={{ fontSize: '1.3rem' }} />
                                        {course.student}
                                    </span>
                                    <span className='text-green-500 flex items-center gap-x-1'>
                                        <p className='text-lg font-Dana-Bold'>{course.price}</p>
                                        {
                                            course.price === 'رایگان!' ? '' : 'تومان'
                                        }
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
