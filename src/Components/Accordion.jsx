import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';


export default function Accordion() {

    const [isShowAccordion, setIsShowAccordion] = useState(false)

    const showAccordion = () => {
        setIsShowAccordion(!isShowAccordion)
    }


    return (
        <div className='relative  rounded-lg cursor-pointer overflow-hidden transition-all mt-4 ' >
            {/* Accordion title */}
            <div onClick={showAccordion} className={`flex items-center justify-between  transition-colors ${isShowAccordion ? 'bg-green-500' : ' bg-gray-100 dark:bg-dark-500 '} px-5 py-4 `} >
                <h2>معرفی دوره</h2>
                <div className="flex items-center gap-x-2">
                    <p>1جلسه</p>
                    <p>13 دقیقه</p>
                    <span>
                        <KeyboardArrowDownIcon style={{ fontSize: '2rem' }} />
                    </span>
                </div>
            </div>

            {/* Accordion body */}
            <div className={`${isShowAccordion ? 'flex' : 'hidden'} flex-col   dark:bg-dark-500 `}>
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100/10">
                    <div className="flex items-center gap-x-2">
                        <span className='w-8 h-8 bg-gray-300 dark:bg-dark-300 flex items-center justify-center rounded-md'>1</span>
                        <h1 className="line-clamp-1">معرفی فصل - نحوه توسعه پروژه</h1>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p>12:12</p>
                        <span>
                            <PlayCircleFilledWhiteOutlinedIcon />
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-x-2">
                        <span className='w-8 h-8 bg-gray-300 dark:bg-dark-300 flex items-center justify-center rounded-md'>2</span>
                        <h1 className="line-clamp-1">چه فیچر های جدیدی رو تو پروژه دیوار یاد می‌گیریم</h1>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p>12:12</p>
                        <span>
                            <PlayCircleFilledWhiteOutlinedIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
