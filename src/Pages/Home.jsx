import React from 'react'
import Notifications from '../Components/Notifications'
import NavBar from '../Components/NavBar'

export default function Home() {
    return (
        <>
            <div className='container py-8'>
                <Notifications />
            </div>

            <NavBar />
        </>
    )
}
