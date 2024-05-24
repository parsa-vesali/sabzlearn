import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Title from '../Components/Title'
export default function CoursesCategory() {
    return (
        <>
            <div className='container py-8 bg-gray-100 dark:bg-dark-900 text-zinc-900 dark:text-gray-100'>
                <Notifications />
            </div>

            <NavBar />

            <div className='container'>
                <Title title='دوره های فرانت اند' color='bg-yellow-400' >
                    <h2 className='dark:text-dark-300 text-xl'>28 عنوان آموزشی</h2>
                </Title>

                <div className="grid grid-cols-12 gap-y-5 md:gap-x-7">
                    {/* SIDEBAR */}
                    <div className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6"></div>
                    {/* CONTENT */}
                    <div className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2"></div>
                </div>
            </div>

            <Footer />
        </>
    )
}
