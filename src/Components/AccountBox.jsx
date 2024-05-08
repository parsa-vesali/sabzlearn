import React, { useState } from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export default function AccountBox() {
    const [isShowBox, setIsShowBox] = useState(false)
    return (
        <div className='relative'>
            <button className='dark:bg-dark-500 bg-gray-200 text-slate-500   dark:text-gray-100 cursor-pointer p-3 rounded-full'>
                <PersonOutlinedIcon style={{ fontSize: '1.6rem' }} />
            </button>

            <div className='absolute shadow-lg bg-dark-700 space-y-5 top-20 left-0 w-64 p-6 text-gray-100 rounded-lg border-t-2 border-t-green-500 transition-all delay-75 invisible opacity-0 group-hover:top-16 group-hover:opacity-100 group-hover:visible child:transition-colors child-hover:text-green-500 flex items-start flex-col child:block child:text-base line-clamp-1'>
                <h2>پارسا وصالی</h2>
            </div>

        </div>
    )
}
