import React from 'react';
// import {Box } from './SmallComponents/Boxes';

const Box = (props) => {
    return (
        <div className='flex items-start flex-col gap-[0.625rem]'>
            <div className='text-black font-medium font-plus-jakarta-sans text-[1.25rem]'>{props.head}</div>
            <div className='text-[#64748B] font-plus-jakarta-sans text-[0.875rem]'>{props.body}</div>
        </div>
    );
};

const WeatherBox = (props) => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div className='text-[#475569] font-plus-jakarta-sans text-[0.875rem]'>{props.time}</div>
            <div className={`flex flex-col items-center bg-[#F1F5F9] ${props.bg} rounded-[1rem] px-[0.69rem] py-1`}>
                <div className={`font-mona-sans text-[1rem] text-[#1E293B] ${props.current}`}>{props.day}</div>
                <div><img src={props.img} className='w-14 h-14' alt="" /></div>
                <div className='text-[#475569] font-plus-jakarta-sans text-[1rem]'>{props.temp}</div>
            </div>
        </div>
    );
};


const Comp1 = () => {
    return (
        <div className='w-full bg-white flex items-center flex-col py-4 rounded-[1.25rem] gap-8'>
            <div className='w-full flex items-start justify-evenly'>
                <div>
                    <img className='w-[6.375rem] h-[5.125rem]' src="images/thunder.png" alt="" />
                </div>
                <Box head='Las Vegas' body='California, CA'/>
                <Box head='+20 °' body='Temperature'/>
                <Box head='25%' body='Humidity'/>
                <Box head='13km/h' body='Wind speed'/>
                <Box head='Thursday' body='23 Aug'/>
            </div>
            <div className='w-full flex items-center justify-evenly'>
                <WeatherBox time='2 pm' day='Thu' img='images/sunny.png' temp='20 °' bg='bg-[#FDE68A]' current='text-[#000] font-bold'/>
                <WeatherBox time='5 pm' day='Fri' img='images/sunny.png' temp='21 °'/>
                <WeatherBox time='8 pm' day='Sat' img='images/sunny.png' temp='21 °'/>
                <WeatherBox time='11 pm' day='Sun' img='images/sunny.png' temp='21 °'/>
                <WeatherBox time='2 am' day='Mon' img='images/sunny.png' temp='21 °'/>
                <WeatherBox time='5 am' day='Tue' img='images/sunny.png' temp='21 °'/>
                <WeatherBox time='8 am' day='Wed' img='images/sunny.png' temp='21 °'/>
            </div>
        </div>
    );
};

export default Comp1;
