import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'

export default function Home() {
    return (
        <>
            <div className='container py-8 bg-white dark:bg-dark-900'>
                <Notifications />
            </div>

            <NavBar />
        </>
    )
}
