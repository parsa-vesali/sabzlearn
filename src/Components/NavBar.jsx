import React, { useState } from 'react';
import { MenuCategory } from "../Constant";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChangeTheme from './ChangeTheme';
import AccountBox from './AccountBox';
import NavBarMobile from './NavBarMobile';
import { Link } from 'react-router-dom';

export default function NavBar() {


    return (
        <>
            {/* NAVBAR DESKTOP */}
            <div className='shadow-lg bg-white dark:bg-dark-700 py-6 hidden lg:flex '>
                <div className="container flex items-center justify-between">
                    {/* menu and logo */}
                    <div className="flex items-center justify-center gap-x-8">
                        {/* LOGO */}
                        <Link to={'/'}>
                            <img src="../../images/logo.webp" className='h-12' alt="logo" />
                        </Link>

                        {/* MENU */}
                        <ul className='text-base xl:text-lg child:dark:text-gray-100 child-hover:text-green-500 child:transition-all flex items-center justify-center gap-x-2 xl:gap-x-4'>
                            {MenuCategory.map(item => (
                                <li key={item.id} className='relative group'>
                                    <Link to={`/course/${item.name}`}  href="#" className=' '>
                                        {item.name}
                                        <KeyboardArrowDownOutlinedIcon />
                                    </Link>
                                    {/* sub menu */}
                                    <div className='absolute shadow-lg bg-white dark:bg-dark-700 space-y-5 top-20 w-64 p-6 text-zinc-700 dark:text-gray-100 rounded-lg border-t-2 border-t-green-500 transition-all delay-75 invisible opacity-0 group-hover:top-12 group-hover:opacity-100 group-hover:visible child:transition-colors child-hover:text-green-500 flex items-start flex-col child:block child:text-base line-clamp-1 z-50'>
                                        {item.submenu.map(sub => (
                                            <a key={sub.id} href="#">{sub.name}</a>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SEARCH BAR AND ACCOUNT */}
                    <div className="flex items-center justify-center gap-x-4">
                        {/* SEARCH BAR */}
                        <div className="relative bg-gray-200 dark:bg-dark-500 py-3 px-2 xl:px-4 rounded-full overflow-hidden text-slate-500 dark:text-gray-100 ">
                            <input type="text" className='bg-transparent outline-none border-none' placeholder='چیو میخوای یاد بگیری ؟' />
                            <span className=' cursor-pointer '>
                                <SearchOutlinedIcon style={{ fontSize: '1.6rem' }} />
                            </span>
                        </div>
                        {/* TOGGLE THEME */}
                        <ChangeTheme />
                        {/* ACCOUNT */}
                        <AccountBox />
                    </div>
                </div>
            </div>

            {/* NAVBAR MOBILE */}
            <NavBarMobile />
        </>
    );
}
