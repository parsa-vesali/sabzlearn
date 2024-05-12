import React from 'react'

export default function Button({ title, icon }) {
    return (
        <button className='py-3 px-8 flex items-center justify-center gap-x-2 text-lg bg-green-500 hover:bg-green-600 transition-all text-gray-200 rounded-full font-Dana-Bold '>
            {icon}
            {title}
        </button>
    )
}
