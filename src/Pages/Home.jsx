import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'

export default function Home() {
    return (
        <>
            <div className='container  py-8 bg-gray-100 dark:bg-dark-900 text-zinc-600 dark:text-gray-100'>
                <Notifications />
            </div>
            <NavBar />
        </>
    )
}
