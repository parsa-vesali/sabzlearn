import React from 'react'

export default function Button({ title, icon }) {
    return (
        <button className='py-3.5 px-5 flex items-center justify-center gap-x-2 bg-green-500 hover:bg-green-600 transition-all text-gray-100 rounded-full '>
            {icon}
            {title}
        </button>
    )
}
