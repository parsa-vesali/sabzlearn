import React from 'react';
import { useParams } from 'react-router-dom';
import Notifications from '../Components/Notifications';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Title from '../Components/Title';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function CoursesCategory() {
    let params = useParams();

    return (
        <>
            <div className="container py-8 text-zinc-900 bg-gray-100 dark:bg-dark-900 dark:text-gray-100">
                <Notifications />
            </div>

            <NavBar />

            <div className="container">
                <Title title={`دوره های ${params.catName}`} color="bg-yellow-400">
                    <h2 className="text-xl dark:text-dark-300">28 عنوان آموزشی</h2>
                </Title>

                <div className="grid grid-cols-12 gap-y-5 md:gap-x-7">
                    {/* SIDEBAR */}
                    <div className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-5">
                        {/* SEARCHBAR */}
                        <div className="relative px-2 py-5 text-slate-500 bg-gray-200 rounded-lg dark:bg-dark-500 xl:px-4 dark:text-gray-100 overflow-hidden">
                            <input
                                type="text"
                                className="bg-transparent border-none outline-none"
                                placeholder="چیو میخوای یاد بگیری ؟"
                            />
                            <span className="absolute left-2 cursor-pointer">
                                <SearchOutlinedIcon style={{ fontSize: '1.6rem' }} />
                            </span>
                        </div>
                        {/* FILTER BOX */}
                        <FilterBox label="فقط دوره های رایگان" />
                        <FilterBox label="در حال پیش فروش" />
                        <FilterBox label="دوره ها خریداری شده" />
                    </div>

                    {/* CONTENT */}
                    <div className="order-1 col-span-full lg:col-span-8 xl:col-span-9 lg:order-2">
                        
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

function FilterBox({ label }) {
    return (
        <div className="relative flex items-center justify-between px-2 py-5 text-slate-500 bg-gray-200 rounded-lg dark:bg-dark-500 xl:px-4 dark:text-gray-100 overflow-hidden">
            <span>{label}</span>
            <FormControlLabel control={<Switch />} />
        </div>
    );
}
