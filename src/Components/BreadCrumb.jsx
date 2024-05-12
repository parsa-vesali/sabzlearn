import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumb({ route1, route2, route3 }) {
    return (
        <div className=' w-full flex items-center gap-x-4 bg-white   dark:bg-dark-700 mt-14 py-4 px-4 rounded-lg shadow-lg dark:text-gray-100 text-zinc-500  text-lg  '>
            <span className='breadcrumb__item'>
                <a href="#" className='breadcrumb__link'><HomeIcon /> </a>
            </span>
            <span>{route1}</span>
            <span>{route2}</span>
            <span>{route3}</span>
        </div>
    )
}
