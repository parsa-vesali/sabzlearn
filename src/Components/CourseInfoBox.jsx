import React from 'react'

export default function CourseInfoBox({ title, subtitle, children }) {
    return (
        <div className="flex flex-col md:flex-row text-center md:text-right  items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white dark:bg-dark-700  pt-4 pb-3.5 sm:py-3 px-4 rounded-xl">
            <span className='text-green-500'>
                {children}
            </span>
            <span className=' space-y-1'>
                <h2 className=' text-lg'>{title}</h2>
                <p className=' block dark:text-gray-400  text-sm font-Dana-Bold'>{subtitle}</p>
            </span>
        </div>
    )
}
