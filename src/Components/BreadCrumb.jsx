import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ route1, route2, route3 }) {
    return (
        <div className=' w-full flex items-center gap-x-2 lg:gap-x-4 bg-white  dark:bg-dark-700 mt-10 py-3 px-2 lg:px-4 rounded-lg shadow-lg dark:text-gray-100 text-zinc-500  text-xs lg:text-base child:cursor-pointer '>
            <span className='breadcrumb__item'>
                <Link to='/' className='breadcrumb__link'><HomeIcon /> </Link>
            </span>
            <span>{route1}</span>
            <p className='text-xl font-bold'>/</p>
            <span>{route2}</span>
            <p className='text-xl font-bold'>/</p>
            <span>{route3}</span>
        </div>
    )
}
