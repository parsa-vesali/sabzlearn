import React from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
export default function MainHeader() {
    return (
        <div className='flex flex-col-reverse lg:flex-row gap-y-5 items-center justify-between my-20'>
            <div className="dark:text-gray-100  text-slate-950 flex flex-col lg:text-right text-center gap-y-6 child:leading-normal">
                <h2 className=' text-3xl lg:text-5xl font-bold font-Dana-Bold '>
                    آکادمی آموزش<br />
                    برنامه نویسی سبزلرن
                </h2>

                <p className='text-lg lg:text-2xl lg:font-semibold '>با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با  <br />خیال راحت یاد بگیر و پیشرفت کن</p>

                <div className="text-base lg:text-lg flex flex-col lg:flex-row gap-y-3 items-center gap-x-2 lg:gap-x-6">
                    <button className=' bg-sky-500 text-gray-100 t hover:bg-sky-700 transition-all rounded-full py-3  px-4'>
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
            <div className="w-[20rem] lg:w-[40rem]">
                <img src="./images/hero-dark.svg" alt="" />
            </div>
        </div>
    )
}
