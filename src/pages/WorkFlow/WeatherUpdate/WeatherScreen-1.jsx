import React, { useState } from 'react';
import NavWorkFlow from './components/Nav';
import WelcomeNav from './components/WelcomeNav';
import Comp1 from './components/Comp1';
import GMap from './components/Maps';
import { Comp2, Comp3 } from './components/Comp2';
import {BasicLineChart, BasicLineChart1, BasicLineChart3} from './components/LineChart';

const CurrentWeather = () => {

    return (
        <div className='w-full flex items-center justify-between bg-gradient-to-r from-[#C0F946] to-[#E0EEB9] rounded-[1.25rem]'>
            <div className='w-full flex items-start flex-col gap-2 ml-4'>
                <div className='text-black text-[1.625rem] font-extrabold font-plus-jakarta-sans'>75° F</div>
                <div className='text-black text-[0.875rem] font-semibold font-plus-jakarta-sans'>Sunny Day ahead!</div>
            </div>
            <div>
                <img className='w-32 h-32' src="images/sunny.png" alt="" />
            </div>
        </div>
    );
};

const WeatherScreen_1 = () => {

    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);

    const humidClicked = () => {
        setState1(true);
        setState2(false);
        setState3(false);
    }

    const humidClicked1 = () => {
        setState1(false);
        setState2(true);
        setState3(false);
    }

    const humidClicked2 = () => {
        setState1(false);
        setState2(false);
        setState3(true);
    }

    return (
        <div className='w-full bg-workflow-bg flex items-center flex-col gap-4 py-4'>
            <NavWorkFlow />
            <WelcomeNav />
            <div className='w-[95%] flex items-start justify-between gap-4'>
                <div className='w-full flex items-center flex-col gap-4'>
                    <Comp1 />
                    <Comp2 />
                    <Comp3 />
                </div>
                <div className='w-[45%] flex items-center flex-col gap-4'>
                    <CurrentWeather />
                    <GMap />
                    <div className='w-[95%] rounded-[1.25rem] bg-white p-4 flex flex-col items-center gap-8'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex flex-col items-start gap-1'>
                                <div className='text-[#9291A5] text-[0.875rem] font-plus-jakarta-sans'>Statistics</div>
                                <div className='text-[#1E1B39] text-[1rem] font-mona-sans font-bold'>Overview</div>
                            </div>
                            <div className='flex items-center rounded-[2.5rem] bg-[#F1F5F9]'>
                                <div className={`${state1 ? 'text-white font-bold bg-[#6366F1] rounded-[3.125rem]' : 'text-[#1E1B39]'} text-[0.75rem] font-plus-jakarta-sans py-[0.5625rem] px-[0.875rem] cursor-pointer`} onClick={humidClicked}>Humidity</div>
                                <div className={`${state2 ? 'text-white font-bold bg-[#6366F1] rounded-[3.125rem]' : 'text-[#1E1B39]'} text-[0.75rem] font-plus-jakarta-sans py-[0.5625rem] px-[0.875rem] cursor-pointer`} onClick={humidClicked1}>Rainfall</div>
                                <div className={`${state3 ? 'text-white font-bold bg-[#6366F1] rounded-[3.125rem]' : 'text-[#1E1B39]'} text-[0.75rem] font-plus-jakarta-sans py-[0.5625rem] px-[0.875rem] cursor-pointer`} onClick={humidClicked2}>Pressure</div>
                            </div>
                        </div>
                        {
                            state1 
                            ? <BasicLineChart /> 
                            : 
                            state2
                            ? <BasicLineChart1 />
                            :
                            <BasicLineChart3 />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherScreen_1;
