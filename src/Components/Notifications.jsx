import React from 'react';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import WestIcon from '@mui/icons-material/West';
import Timer from './Timer';

export default function Notifications() {
    return (
        <div className='bg-red-600 text-gray-100 rounded-lg  flex flex-col gap-y-4 pb-4 lg:py-0 lg:flex-row  items-center justify-between overflow-hidden'>

            {/* RIGHT */}
            <div className="flex flex-col lg:flex-row  items-center justify-between gap-y-3 gap-x-4">

                <span className=' py-4 lg:py-6 px-5 bg-white/45 rounded-b-full lg:rounded-b-none lg:rounded-bl-full lg:rounded-l-full '>
                    <NotificationsActiveOutlinedIcon className='' style={{ fontSize: '2.5rem' }} />
                </span>

                <h2 className='font-Dana-Bold  text-lg lg:text-xl'>۱ تا ۴ خرداد یک پیشنهاد شگفت انگیز داریم!</h2>

                <button className='px-2 py-2 xl:px-3 rounded-full flex items-center justify-center xl:gap-x-2 bg-white text-red-600'>
                    مشاهده دوره ها
                    <WestIcon style={{ fontSize: '1.3rem' }} />
                </button>
            </div>

            {/* TIMER LEFT */}
            <div >
                <Timer />
            </div>
        </div>
    );
}
