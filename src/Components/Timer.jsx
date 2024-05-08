import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [extended, setExtended] = useState(false);

    useEffect(() => {
        let countdownDate = new Date('2024-05-10T00:00:00').getTime();

        if (extended) {
            // If extended, set the countdown for the next 10 days
            countdownDate = new Date(Date.now() + (10 * 24 * 60 * 60 * 1000)).getTime();
            setExtended(false); // Reset the extended state for the next time
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);

            if (distance < 0) {
                clearInterval(interval);
                // If the countdown is finished, set the extended state to true
                setExtended(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [extended]); // Re-run the effect when the extended state changes

    return (
        <div className='flex items-center justify-center  gap-x-4 px-6 flex-row-reverse child:w-16 child:h-16 child:rounded-full child:flex'>
            <span className='  text-zinc-900 bg-gray-100 items-center flex-col justify-center gap-y-0 '>
                <p className='font-bold'>{days}</p>
                <p>روز</p>
            </span >
            <span className='  text-zinc-900  bg-gray-100  items-center flex-col  justify-center gap-y-0 '>
                <p className='font-bold'>{hours}</p>
                <p>ساعت</p>
            </span>
            <span className='   text-gray-100 border-2 border-gray-100  items-center flex-col  justify-center gap-y-0 '>
                <p className='font-bold'>{minutes}</p>
                <p>دقیقه</p>
            </span>
            <span className='    text-gray-100 border-2 border-gray-100  items-center flex-col  justify-center gap-y-0 '>
                <p className='font-bold'>{seconds}</p>
                <p>ثانیه</p>
            </span>
        </div>
    );
}
