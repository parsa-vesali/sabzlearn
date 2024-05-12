import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'
import Breadcrumb from '../Components/BreadCrumb';



export default function MainCourse() {
    return (
        <>
            <div className='container py-8 bg-gray-100 dark:bg-dark-900 text-zinc-600 dark:text-gray-100'>
                <Notifications />
            </div>
            <NavBar />
            <div className="container">
                <Breadcrumb route1='دوره ها' route2='بک اند' route3='آموزش پروژه محور فریمورک Fastify' />
            </div>
        </>
    )
}
