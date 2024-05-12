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
                <div className="">
                    <div className="">
                        <h2>آموزش پروژه محور فریمورک Fastify</h2>
                        <p>Fastify یه فریمورک وب سریع و کم‌ حجم برای ساخت برنامه‌های تحت وب با Node.js هست.Fastify یکی از فریم‌ورک‌های جدید در صنعت توسعه وب هست که با ویژگی‌های قدرتمندش تونسته محوبیت خوبی رو بدست بیاره!</p>

                        <Button title='ثبت نام در دوره' icon={<SchoolOutlinedIcon />}></Button>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}
