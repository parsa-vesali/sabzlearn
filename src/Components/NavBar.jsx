import React, { useState } from 'react';
import { MenuCategory } from "../Constant";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ChangeTheme from './ChangeTheme';
import AccountBox from './AccountBox';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {
    const [isShowMenu, setIsShowMenu] = useState(true);

    const clickHanlder = () => {
        setIsShowMenu(!isShowMenu);
    };

    return (
        <>
            {/* NAVBAR DESKTOP */}
            <div className='shadow-lg bg-white dark:bg-dark-700 py-6 hidden lg:flex '>
                <div className="container flex items-center justify-between">
                    {/* menu and logo */}
                    <div className="flex items-center justify-center gap-x-8">
                        {/* LOGO */}
                        <a href="#">
                            <img src="./images/logo.webp" className='h-12' alt="logo" />
                        </a>

                        {/* MENU */}
                        <ul className='text-base xl:text-lg child:dark:text-gray-100 child-hover:text-green-500 child:transition-all flex items-center justify-center gap-x-2 xl:gap-x-4'>
                            {MenuCategory.map(item => (
                                <li key={item.id} className='relative group'>
                                    <a href="#" className=' '>
                                        {item.name}
                                        <KeyboardArrowDownOutlinedIcon />
                                    </a>
                                    {/* sub menu */}
                                    <div className='absolute shadow-lg bg-white dark:bg-dark-700 space-y-5 top-20 w-64 p-6 text-zinc-700 dark:text-gray-100 rounded-lg border-t-2 border-t-green-500 transition-all delay-75 invisible opacity-0 group-hover:top-12 group-hover:opacity-100 group-hover:visible child:transition-colors child-hover:text-green-500 flex items-start flex-col child:block child:text-base line-clamp-1'>
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
            <div className="flex lg:hidden shadow-lg bg-white dark:bg-dark-700 py-6">
                <div className="container flex items-center justify-between">
                    <button onClick={clickHanlder} className='dark:bg-dark-500 bg-gray-200 text-slate-500 dark:text-gray-100 cursor-pointer p-3 rounded-full'>
                        <MenuIcon />
                    </button>
                    <div className={` ${isShowMenu ? 'right-0 opacity-100' : '-right-64 opacity-0'} dark:bg-dark-700 bg-gray-100  shadow-lg w-64 overflow-y-auto fixed top-0 bottom-0 z-50 p-4.5 transition-all  p-4`}>
                        {/* HEADER SIDEBAR */}
                        <div className="flex items-center justify-between  border-b border-b-neutral-200 dark:border-b-white/5 pb-4">
                            {/* LOGO */}
                            <a href="#">
                                <img src="./images/logo.webp" className='h-12' alt="logo" />
                            </a>
                            <div className="flex items-center gap-x-2">
                                <ChangeTheme />
                                <button onClick={clickHanlder} className='dark:bg-dark-500 bg-gray-200 text-slate-500   dark:text-gray-100 cursor-pointer p-3 rounded-full'>
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>
                        {/* SEARCH BAR */}
                        <div className="relative bg-gray-200 dark:bg-dark-500 py-4 px-3 text-sm my-4  rounded-full overflow-hidden text-slate-500  dark:text-gray-100 ">
                            <input type="text" className='bg-transparent outline-none border-none' placeholder='چیو میخوای یاد بگیری ؟' />
                            <span className=' cursor-pointer '>
                                <SearchOutlinedIcon style={{ fontSize: '1.3rem' }} />
                            </span>
                        </div>
                        {/* MENU */}
                        <ul className='px-2 py-4 space-y-4 text-zinc-800 dark:text-white'>
                            {MenuCategory.map(cat => (
                                <li key={cat.id} className='flex items-center justify-between hover:text-green-500'>
                                    <a href="#">
                                        {cat.name}
                                    </a>
                                    <span>
                                        <KeyboardArrowLeftOutlinedIcon />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        {/* LOGO */}
                        <a href="#">
                            <img src="./images/logo.webp" className='h-12' alt="logo" />
                        </a>
                    </div>
                    <div className="">
                        <AccountBox />
                    </div>
                </div>
                {/* OVERLAY */}
                {isShowMenu && (
                    <div onClick={clickHanlder} className="fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"></div>
                )}
            </div>
        </>
    );
}
