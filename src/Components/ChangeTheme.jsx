import React, { useEffect, useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

export default function ChangeTheme() {

    const [theme, setTheme] = useState('dark')

    const showMenuHanlder = () => {
        setShowIsMenu(!showIsMenu)
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleSwith = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <>
            <button onClick={handleSwith} className='dark:bg-dark-500 bg-gray-200  dark:text-gray-100 text-slate-500 cursor-pointer p-3 rounded-full'>
                {
                    theme === 'dark' ? (
                        <LightModeOutlinedIcon style={{ fontSize: '1.6rem' }} />
                    ) : (
                        <NightlightOutlinedIcon style={{ fontSize: '1.6rem' }} />
                    )
                }

            </button>
        </>
    )
}



