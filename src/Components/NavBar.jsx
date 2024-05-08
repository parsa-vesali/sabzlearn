import React from 'react'
import { MenuCategory } from "../Constant";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChangeTheme from './ChangeTheme';


export default function NavBar() {
    return (
        <div className='container shadow-lg bg-gray-100 dark:bg-dark-700 py-6 flex items-center justify-between'>

            {/* menu and logo */}
            <div className="flex items-center justify-center gap-x-8">
                {/* LOGO */}
                <a href="#">
                    <img src="./images/logo.webp" className='h-12' alt="logo" />
                </a>

                {/* MENU */}
                <ul className='text-gray-100 text-lg child-hover:text-green-500 child:transition-all flex items-center justify-center gap-x-4'>
                    {
                        MenuCategory.map(item => (
                            <li className='relative group'>
                                <a href="#" className=' '>
                                    {item.name}
                                    <KeyboardArrowDownOutlinedIcon />
                                </a>
                                {/* sub menu */}

                                <div className='absolute shadow-lg bg-dark-700 space-y-5 top-20 w-64 p-6 text-gray-100 rounded-lg border-t-2 border-t-green-500 transition-all delay-75 invisible opacity-0 group-hover:top-12 group-hover:opacity-100 group-hover:visible child:transition-colors child-hover:text-green-500 flex items-start flex-col child:block child:text-base line-clamp-1'>
                                    {
                                        item.submenu.map(sub => (
                                            <a href="#">{sub.name}</a>
                                        ))
                                    }
                                </div>


                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* SEARCH BAR AND ACCOUNTE */}
            <div className="flex items-center justify-center gap-x-4">

                {/* SEARCH BAR */}
                <div className="relative dark:bg-dark-500 py-3 px-4   rounded-full overflow-hidden text-gray-100 ">
                    <input type="text" className='bg-transparent outline-none border-none' placeholder='چیو میخوای یاد بگیری ؟' />
                    <span className=' cursor-pointer '>
                        <SearchOutlinedIcon style={{ fontSize: '1.6rem' }} />
                    </span>
                </div>

                {/* TOGGLE THEME */}
                <ChangeTheme />


                {/* ACCOUNTE */}
                <button className='bg-dark-500 text-gray-100 cursor-pointer p-3 rounded-full'>
                    <PersonOutlinedIcon style={{ fontSize: '1.6rem' }} />
                </button>


            </div>
        </div>
    )
}
