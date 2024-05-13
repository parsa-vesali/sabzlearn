import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Breadcrumb from '../Components/BreadCrumb';
import Button from '../Components/Common/Button';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ForumIcon from '@mui/icons-material/Forum';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CourseInfoBox from '../Components/CourseInfoBox';

import ProgressBar from 'react-bootstrap/ProgressBar';

export default function MainCourse() {
    return (
        <>
            <div className='container py-8 bg-gray-100 dark:bg-dark-900 text-zinc-900 dark:text-gray-100'>
                <Notifications />
            </div>


            <NavBar />


            <div className="container dark:bg-dark-900 text-zinc-900 dark:text-gray-100">
                <Breadcrumb route1='دوره ها' route2='بک اند' route3='آموزش پروژه محور فریمورک Fastify' />

                {/* title and demo  */}
                <div className="flex items-start flex-col-reverse lg:flex-row justify-between mt-14 lg:gap-x-5 lg:h-[350px] bg-dark-700 lg:bg-transparent p-1 lg:p-0 rounded-lg">

                    <div className="flex flex-col justify-between h-full ">
                        <div className="">
                            <h2 className='text-[1.625rem] font-Dana-Bold mb-4'>آموزش پروژه محور NestJS از صفر!</h2>
                            <p className=' text-lg line-clamp-4'>NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر Node.js هست. نست بر پایه الگوی معماری ماژولار پیاده سازی شده و میتونیم باهاش برنامه‌هایی با خوانایی بسیار بالا بسازیم</p>
                        </div>

                        <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row justify-between items-center">
                            <Button title='ثبت نام در دوره' icon={<SchoolOutlinedIcon />} />
                            <p className=' text-2xl font-bold'>1,600,000 <span className=' text-base'>تومان</span></p>
                        </div>
                    </div>


                    <video src="" controls poster='./images/courses/git.webp' className='h-[345px] rounded-xl'></video>
                </div>






                {/* Course Data */}
                <div className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">


                    {/* Data Right */}
                    <div className="col-span-12 lg:col-span-8">

                        {/* COURSE DATA BOX */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

                            <CourseInfoBox title='وضعیت دوره' subtitle='تکمیل شده' >
                                <InfoOutlinedIcon style={{ fontSize: '2.7rem' }} />
                            </CourseInfoBox>
                            <CourseInfoBox title='مدت زمان دوره' subtitle='23 ساعت' >
                                <AccessTimeOutlinedIcon style={{ fontSize: '2.7rem' }} />
                            </CourseInfoBox>
                            <CourseInfoBox title='آخرین بروزرسانی' subtitle='1403/02/01' >
                                <CalendarMonthOutlinedIcon style={{ fontSize: '2.7rem' }} />
                            </CourseInfoBox>
                            <CourseInfoBox title='روش پشتیبانی' subtitle='آنلاین' >
                                <PeopleOutlinedIcon style={{ fontSize: '2.7rem' }} />
                            </CourseInfoBox>
                            <CourseInfoBox title='پیش نیاز' subtitle='HTML & CSS' >
                                <BusinessCenterOutlinedIcon style={{ fontSize: '2.7rem' }} />
                            </CourseInfoBox>
                            <CourseInfoBox title='نوع مشاهده' subtitle='آنلاین' >
                                <VideocamOutlinedIcon style={{ fontSize: '2.7rem' }} />
                            </CourseInfoBox>

                        </div>
                    </div>



                    {/* Data Left */}
                    <div className="col-span-12 lg:col-span-4 space-y-8">
                        <div className=" bg-white dark:bg-dark-700 rounded-xl p-4.5 sm:p-5">
                            <div className="flex gap-x-4">
                                <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-100 dark:bg-dark-500 rounded-xl">
                                    <span className=' text-green-500'>
                                        <GroupIcon style={{ fontSize: '2.7rem' }} />
                                    </span>
                                    <div className="font-Dana-Bold">
                                        <h2 className=' text-lg  '>2090</h2>
                                        <p className=' text-sm text-gray-400'>دانشجو</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-gray-100 dark:bg-dark-500 rounded-xl">
                                    <span className=' text-yellow-500'>
                                        <StarIcon style={{ fontSize: '2.7rem' }} />
                                    </span>
                                    <div className="font-Dana-Bold">
                                        <h2 className=' text-lg  '>5.0</h2>
                                        <p className=' text-sm text-gray-400'>رضایت</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-5 child:font-Dana-Bold">
                                <p>درصد تکمیل دوره</p>
                                <p>54%</p>
                            </div>

                            <div className=" relative z-10 mt-2 w-full py-1.5  rounded-xl bg-green-500/20 overflow-hidden">
                                <span className=' absolute top-0 bottom-0 left-0 z-20 w-[54%] bg-green-500 rounded-xl'></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-dark-700 rounded-xl p-4.5 sm:p-5 flex flex-col items-center gap-y-4 justify-center">
                            <img className=' w-22 h-22 rounded-full border-2 border-white' src="./images/profile.png" alt="teacher" />
                            <p className=' text-lg font-Dana-Bold'>
                                رضا دولتی | مدرس دوره
                            </p>
                            <Button title='مشاهده پروفایل من' />
                        </div>
                    </div>
                </div>

            </div>


            <Footer />
        </>
    )
}
