import React, { useState } from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function AccountBox() {
    const [isShowBox, setIsShowBox] = useState(false)

    const clickHanlder = () => {
        setIsShowBox(!isShowBox)
    }

    return (
        <>
            <div className='relative z-40'>
                <button onClick={clickHanlder} className='dark:bg-dark-500 bg-gray-200 text-slate-500   dark:text-gray-100 cursor-pointer p-3 rounded-full'>
                    {
                        isShowBox ? (
                            <CloseIcon style={{ fontSize: '1.6rem' }} />
                        ) : (
                            <PersonOutlinedIcon style={{ fontSize: '1.6rem' }} />
                        )
                    }
                </button>

                <div className={`absolute shadow-lg bg-white  dark:bg-dark-700 space-y-2 top-16 left-0  w-72 py-3 px-4 text-zinc-700  dark:text-gray-100 rounded-xl border-t-4 border-t-green-500 transition-all delay-75 ${isShowBox ? 'visible opacity-100' : 'invisible opacity-0'} child:transition-colors  flex items-start flex-col `}>

                    <div className="w-full flex items-center justify-staer gap-x-4 border-b border-b-neutral-200 dark:border-b-white/5 pb-4 child-hover:text-gray-100">
                        <div className="">
                            <img className='rounded-full w-16 h-16' src="./images/profile.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <p className='text-lg font-Dana-Bold'>پارسا وصالی</p>
                            <p className='text-green-500'>موجودی 0</p>
                        </div>
                    </div>

                    <div className='flex w-full flex-col gap-y-1 child-hover:bg-green-600 text-lg child-hover:text-gray-100 child:transition-all border-b border-b-neutral-200 dark:border-b-white/5 pb-4'>
                        <a href="#" className='flex items-center gap-x-2 py-3 rounded-lg px-2'>
                            <HomeOutlinedIcon />
                            پیشخوان
                        </a>
                        <a href="#" className='flex items-center gap-x-2 py-3 rounded-lg px-2'>
                            <FolderCopyOutlinedIcon />
                            دوره های من
                        </a>
                        <a href="#" className='flex items-center gap-x-2 py-3 rounded-lg px-2'>
                            <PersonOutlineOutlinedIcon />
                            جزئیات حساب
                        </a>
                        <a href="#" className='flex items-center gap-x-2 py-3 rounded-lg px-2'>
                            <ForumOutlinedIcon />
                            تیکت ها
                        </a>
                    </div>

                    <div className="flex w-full flex-col gap-y-1 child-hover:bg-red-600  child-hover:text-gray-100 text-lg child:transition-all">
                        <a href="#" className='flex items-center gap-x-2 py-3 rounded-lg px-2 '>
                            <PowerSettingsNewOutlinedIcon />
                            خروج
                        </a>
                    </div>

                </div>

            </div>


            {/* OVERLAY */}
            {
                isShowBox && (
                    <div onClick={clickHanlder} className='fixed w-full h-full top-0 left-0 bg-black/40 z-10 md:backdrop-blur transition-all show'></div>
                )
            }
        </>
    )
}
