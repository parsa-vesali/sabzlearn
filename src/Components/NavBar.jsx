import React from 'react'
import { MenuCategory } from "../Constant";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


export default function NavBar() {
    return (
        <div className='container bg-dark-700 py-6 flex items-center justify-between'>

            <div className="flex items-center justify-center gap-x-8">
                {/* LOGO */}
                <a href="#">
                    <img src="./images/logo.webp" className='h-12' alt="logo" />
                </a>

                {/* MENU */}
                <ul className='text-gray-100 text-lg child-hover:text-green-500 child:transition-all flex items-center justify-center gap-x-4'>
                    {
                        MenuCategory.map(item => (
                            <li className='relative group'>
                                <a href="#" className=' '>
                                    {item.name}
                                    <KeyboardArrowDownOutlinedIcon />
                                </a>
                                <div className='absolute bg-dark-700 space-y-4 top-20 w-60 p-5 text-gray-100 rounded-lg border-t-2 border-t-green-500 transition-all delay-75 invisible opacity-0 group-hover:top-12 group-hover:opacity-100 group-hover:visible child:transition-colors child-hover:text-green-500 flex items-start flex-col child:block child:text-base'>
                                    {
                                        item.submenu.map(sub => (
                                            <a href="#">{sub.name}</a>
                                        ))
                                    }
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>


            <div className=""></div>
        </div>
    )
}
