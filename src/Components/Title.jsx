import React from 'react'
export default function Title({ title, subtitle, color, children }) {
    return (
        <div className='flex items-center justify-between mt-20 mb-12'>
            <div className="flex flex-col gap-y-1 lg:gap-y-4">
                <h2 className=' text-xl lg:text-3xl font-Dana-Bold dark:text-gray-100 flex items-center gap-x-2'>
                    <span className={`p-2 rounded-sm ${color} hidden lg:flex `} ></span> {title}
                </h2>
                <p className='text-dark-300  text-sm lg:text-lg font-semibold line-clamp-1'>{subtitle}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
