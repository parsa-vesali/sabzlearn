import React from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
export default function MainHeader() {
    return (
        <div className='flex items-center justify-between'>
            <div className="dark:text-gray-100  text-slate-950  flex flex-col gap-y-6 child:leading-normal">
                <h2 className='  text-5xl font-bold font-Dana-Bold '>
                    آکادمی آموزش<br />
                    برنامه نویسی سبزلرن
                </h2>

                <p className='text-2xl font-semibold '>با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با  <br />خیال راحت یاد بگیر و پیشرفت کن</p>

                <div className="text-lg flex items-center gap-x-6">
                    <button className=' bg-sky-500 text-gray-100  hover:bg-sky-700 transition-all rounded-full py-3 px-4'>
                        از این مسیر ها شروع کن
                    </button>
                    <button className='flex items-center gap-x-2 '>
                        <span className='py-3 px-3 bg-green-500 rounded-full flex items-center justify-center text-gray-100'>
                            <PlayArrowOutlinedIcon style={{ fontSize: '1.8rem' }} />
                        </span>
                        دوره های رایگان
                    </button>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}
