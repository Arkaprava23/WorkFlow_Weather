import React from 'react';
import { useNavigate } from 'react-router-dom';

const Data = (props) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='w-full flex items-center justify-around'>
                <div className='text-black text-[0.875rem] font-plus-jakarta-sans'>
                    {props.time}
                </div>
                <div className='text-black text-[1rem] font-semibold font-plus-jakarta-sans'>
                    {props.temp}
                </div>
                <div className='flex items-center gap-1'>
                    <img className='w-8 h-8' src={props.w_img} alt="" />
                    <div className='text-black text-[0.875rem] font-plus-jakarta-sans'>{props.weather}</div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="images/humid.svg" alt="" />
                        <div className='text-black text-[0.875rem] font-plus-jakarta-sans'>{props.per}</div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src="images/wind.svg" alt="" />
                            <div className='text-black text-[0.875rem] font-plus-jakarta-sans'>{props.wind}</div>
                        </div>
                        <button className='bg-transparent'>
                            <img src="images/down_arrow.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='h-[2px] bg-[#E2E8F0] w-full' />
        </div>
    );
}

const Comp2 = () => {

    const navigate = useNavigate();

    const viewAllClicked = () => {
        navigate("/hourly-update");
    }

    return (
        <div className='w-full bg-white flex items-center flex-col rounded-[1.25rem]'>
            <div className='w-[95%] flex items-center justify-between m-4 mb-0'>
                <div className='flex flex-col items-start gap-2'>
                    <div className='text-black text-[1.125rem] font-semibold font-mona-sans'>Hourly Weather</div>
                    <div className='text-[#334155] text-[0.875rem] font-plus-jakarta-sans'>As of 19:39 PKT</div>
                </div>
                <div className='text-[#0F172A] text-[0.875rem] font-plus-jakarta-sans px-5 py-2.5 rounded-[3.125rem] bg-[#F1F5F9]'>
                    Weather for October 22, 2023, in Atlanta, GA
                </div>
            </div>

            <div className='w-[95%] flex flex-col items-start m-4'>
                <hr className='h-[2px] bg-[#E2E8F0] w-full' />
                <div className='text-[#64748B] text-[0.875rem] font-semibold font-plus-jakarta-sans'>Sunday, 12 November</div>
            </div>

            <div className='w-[95%] flex flex-col gap-4 mx-4'>
                <Data time='20.00' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
                <Data time='20.00' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
                <Data time='20.00' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
            </div>

            <div className='w-[95%] flex items-start justify-center'>
                <button onClick={viewAllClicked} className='my-4 border border-[#6366F1] text-[#6366F1] px-[1.9375rem] py-4 rounded-[2.5rem] border-solid bg-[#fff] text-[0.875rem] font-semibold hover:text-white hover:bg-[#6366F1] cursor-pointer'>View All</button>
            </div>
        </div>
    );
};

const Comp3 = () => {

    const navigate = useNavigate();

    const viewAllClicked = () => {
        navigate("/daily-update");
    }

    return (
        <div className='w-full bg-white flex items-center flex-col rounded-[1.25rem]'>
            <div className='w-[95%] flex items-center justify-between m-4'>
                <div className='flex flex-col items-start gap-2'>
                    <div className='text-black text-[1.125rem] font-semibold font-mona-sans'>10-Day Weather</div>
                    <div className='text-[#334155] text-[0.875rem] font-plus-jakarta-sans'>As of 19:39 PKT</div>
                </div>
                <div className='text-[#0F172A] text-[0.875rem] font-plus-jakarta-sans px-5 py-2.5 rounded-[3.125rem] bg-[#F1F5F9]'>
                    Weather for October 22, 2023, in Atlanta, GA
                </div>
            </div>

            <div className='w-[95%] flex flex-col gap-4 mx-4'>
                <Data time='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
                <Data time='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
                <Data time='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
                <Data time='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
                <Data time='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' />
            </div>

            <div className='w-[95%] flex items-start justify-center'>
                <button onClick={viewAllClicked} className='my-4 border border-[#6366F1] text-[#6366F1] px-[1.9375rem] py-4 rounded-[2.5rem] border-solid bg-[#fff] text-[0.875rem] font-semibold hover:text-white hover:bg-[#6366F1] cursor-pointer'>View All</button>
            </div>
        </div>
    );
};

export {Comp2, Comp3};
