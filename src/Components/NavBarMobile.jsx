import React, { useState } from 'react';
import { MenuCategory } from "../Constant";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChangeTheme from './ChangeTheme';
import AccountBox from './AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBarMobile() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [subMenuStates, setSubMenuStates] = useState(MenuCategory.map(() => false));

    const clickHandler = () => {
        setIsShowMenu(!isShowMenu);
    };

    const subMenuHandler = (index) => {
        const newSubMenuStates = [...subMenuStates];
        newSubMenuStates[index] = !newSubMenuStates[index];
        setSubMenuStates(newSubMenuStates);
    };

    return (
        <div className="flex lg:hidden shadow-lg bg-white dark:bg-dark-700 py-6">
            <div className="container flex items-center justify-between">
                <button onClick={clickHandler} className='dark:bg-dark-500 bg-gray-200 text-slate-500 dark:text-gray-100 cursor-pointer p-3 rounded-full'>
                    <MenuIcon />
                </button>
                <div className={` ${isShowMenu ? 'right-0 opacity-100' : '-right-64 opacity-0'} dark:bg-dark-700 bg-gray-100  shadow-lg w-64 overflow-y-auto fixed top-0 bottom-0 z-50 p-4.5 transition-all  p-4`}>
                    {/* HEADER SIDEBAR */}
                    <div className="flex items-center justify-between  border-b border-b-neutral-200 dark:border-b-white/5 pb-4">
                        {/* LOGO */}
                        <a href="#">
                            <img src="../../images/logo.webp" className='h-12' alt="logo" />
                        </a>
                        <div className="flex items-center gap-x-2">
                            <ChangeTheme />
                            <button onClick={clickHandler} className='dark:bg-dark-500 bg-gray-200 text-slate-500   dark:text-gray-100 cursor-pointer p-3 rounded-full'>
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                    {/* SEARCH BAR */}
                    <div className="relative bg-gray-200 dark:bg-dark-500 py-4 px-3 text-sm my-4  rounded-full overflow-hidden text-slate-500  dark:text-gray-100 ">
                        <input type="text" className='bg-transparent outline-none border-none' placeholder='چیو میخوای یاد بگیری ؟' />
                    </div>
                    {/* MENU */}
                    <ul className='px-2 py-4 space-y-4 text-zinc-800 dark:text-white'>
                        {MenuCategory.map((cat, index) => (
                            <>
                                <li onClick={() => subMenuHandler(index)} key={cat.id} className='flex items-center justify-between hover:text-green-500'>
                                    <a href="#">
                                        {cat.name}
                                    </a>
                                    <span>
                                        {subMenuStates[index] ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowLeftOutlinedIcon />}
                                    </span>
                                </li>
                                <div className={`${subMenuStates[index] ? 'opacity-100 visible flex' : 'opacity-0 invisible hidden'} transition-all bg-slate-200 dark:bg-dark-900 rounded-lg py-3 px-2  flex-col space-y-4`}>
                                    {
                                        cat.submenu.map((sub, subIndex) => (
                                            <a key={subIndex} href="#" className='line-clamp-1'>{sub.name}</a>
                                        ))
                                    }
                                </div>
                            </>
                        ))}
                    </ul>
                </div>
                <div >
                    {/* LOGO */}
                    <a href="#">
                        <img src="../../images/logo.webp" className='h-12' alt="logo" />
                    </a>
                </div>
                <div >
                    <AccountBox />
                </div>
            </div>
            {/* OVERLAY */}
            {isShowMenu && (
                <div onClick={clickHandler} className="fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all"></div>
            )}
        </div>
    )
}
