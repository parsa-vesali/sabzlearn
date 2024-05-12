import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'
import Breadcrumb from '../Components/BreadCrumb';
import Button from '../Components/Common/Button';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';


export default function MainCourse() {
    return (
        <>
            <div className='container py-8 bg-gray-100 dark:bg-dark-900 text-zinc-600 dark:text-gray-100'>
                <Notifications />
            </div>


            <NavBar />


            <div className="container dark:bg-dark-900 text-zinc-600 dark:text-gray-100">
                <Breadcrumb route1='دوره ها' route2='بک اند' route3='آموزش پروژه محور فریمورک Fastify' />

                {/* title and demo  */}
                <div className="flex items-start flex-col-reverse lg:flex-row justify-between mt-14 lg:gap-x-5 lg:h-[350px] bg-dark-700 lg:bg-transparent p-1 lg:p-0 rounded-lg">

                    <div className="flex flex-col justify-between h-full ">
                        <div className="">
                            <h2 className='text-[1.625rem] font-Dana-Bold mb-4'>آموزش پروژه محور NestJS از صفر!</h2>
                            <p className=' text-lg line-clamp-4'>NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر Node.js هست. نست بر پایه الگوی معماری ماژولار پیاده سازی شده و میتونیم باهاش برنامه‌هایی با خوانایی بسیار بالا بسازیمz</p>
                        </div>


                        <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row justify-between items-center">
                            <Button title='ثبت نام در دوره' icon={<SchoolOutlinedIcon />} />
                            <p className=' text-2xl font-bold'>1,600,000 <span className=' text-base'>تومان</span></p>
                        </div>
                    </div>


                    <video src="" controls poster='./images/courses/git.webp' className='h-[345px] rounded-xl'></video>
                </div>
            </div>
        </>
    )
}
