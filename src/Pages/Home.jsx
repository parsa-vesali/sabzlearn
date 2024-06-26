import React, { useState } from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'
import MainHeader from '../Components/MainHeader'
import LastCurses from '../Components/LastCurses'
import RoadMap from '../Components/RoadMap'
import Services from '../Components/Services'
import NewCurses from '../Components/NewCurses'
import Articles from '../Components/Articles'
import PupularCurses from '../Components/PupularCurses'
import Footer from '../Components/Footer'


export default function Home() {

    return (
        <>
            <div className='container py-8 bg-gray-100 dark:bg-dark-900 text-zinc-600 dark:text-gray-100'>
                <Notifications />
            </div>
            <NavBar />
            <div className="container">
                <MainHeader />
                <LastCurses />
                <RoadMap />
                <Services />
                <NewCurses />
                <Articles />
                <PupularCurses />
            </div>
            <Footer />
        </>
    )
}
