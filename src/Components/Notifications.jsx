import React from 'react'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import WestIcon from '@mui/icons-material/West';
import Timer from './Timer';

export default function Notifications() {
    return (
        <div className='bg-red-600 text-gray-100 rounded-lg flex items-center justify-between overflow-hidden'>

            {/* RIGHT  */}
            <div className="flex items-center justify-between gap-x-4">

                <span className='py-6 px-5 bg-white/45 rounded-l-full'>
                    <NotificationsActiveOutlinedIcon className='' style={{ fontSize: '2.5rem' }} />
                </span>

                <h2 className='font-Dana-Bold text-xl'>۱ تا ۴ خرداد یک پیشنهاد شگفت انگیز داریم!</h2>

                <button className='px-3 py-2 rounded-full flex items-center justify-center gap-x-2 bg-white text-red-600'>
                    مشاهده دوره ها
                    <WestIcon style={{ fontSize: '1.3rem' }} />
                </button>
            </div>

            {/* TIMER LEFT */}
            <div >
                <Timer />
            </div>
        </div>
    )
}
