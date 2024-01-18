import React, { useState } from 'react';

const Data = (props) => {

    const [status, setStatus] = useState(false);

    const expandClicked = () => {
        setStatus(status => !status);
    }

    return (
        <div className='flex flex-col gap-1'>
            {
                !status ?
                    <div className='w-full flex items-center justify-around'>
                        <div className='text-black text-[0.875rem] font-plus-jakarta-sans'>
                            {props.date}
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
                                <button className='bg-transparent cursor-pointer' onClick={expandClicked}>
                                    <img src={status ? "images/up_arrow.svg" : "images/down_arrow.svg"} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    ''
            }
            {
                status ?
                    <div className='w-[95%] bg-[#F1F5F9] flex flex-col items-center border border-[#CBD5E1] border-solid rounded-[1rem] p-5 gap-8'>

                        <div className='w-full flex items-center justify-between'>
                            <div className='flex flex-col items-start gap-3'>
                                <div className='text-black text-[0.875rem] font-plus-jakarta-sans'>{props.date} | Night</div>
                                <div className='flex items-center justify-center gap-4'>
                                    <div className='text-[#263238] text-[1.625rem] font-mona-sans font-semibold'>{props.temp}</div>
                                    <img className='w-[2rem] h-[1.6875rem]' src="images/night.png" alt="" />
                                </div>
                                <div className='text-[#656565] text-[0.75rem] font-plus-jakarta-sans'>Generally clear. Low 9°C. Winds SE at 10 to 15 km/h.</div>
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
                                    <button className='bg-transparent cursor-pointer' onClick={expandClicked}>
                                        <img src={status ? "images/up_arrow.svg" : "images/down_arrow.svg"} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center justify-center gap-4 bg-white rounded-[0.6875rem] py-5 px-9'>
                                <div><img className='w-[2rem] h-[1.8125rem]' src="images/humidity.png" alt="" /></div>
                                <div className='flex flex-col items-start gap-1'>
                                    <div className='text-[#263238] text-[1rem] font-plus-jakarta-sans font-bold'>{props.humid}</div>
                                    <div className='text-[#475569] text-[0.75rem] font-plus-jakarta-sans'>Humidity</div>
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-4 bg-white rounded-[0.6875rem] py-5 px-9'>
                                <div><img className='w-[2rem] h-[1.8125rem]' src="images/uv.png" alt="" /></div>
                                <div className='flex flex-col items-start gap-1'>
                                    <div className='text-[#263238] text-[1rem] font-plus-jakarta-sans font-bold'>{props.uv} <span className='font-normal'>of</span> 11</div>
                                    <div className='text-[#475569] text-[0.75rem] font-plus-jakarta-sans'>UV Index</div>
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-4 bg-white rounded-[0.6875rem] py-5 px-9'>
                                <div><img className='w-[2rem] h-[1.8125rem]' src="images/cloud.png" alt="" /></div>
                                <div className='flex flex-col items-start gap-1'>
                                    <div className='text-[#263238] text-[1rem] font-plus-jakarta-sans font-bold'>{props.moonrise}</div>
                                    <div className='text-[#475569] text-[0.75rem] font-plus-jakarta-sans'>Moonrise</div>
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-4 bg-white rounded-[0.6875rem] py-5 px-9'>
                                <div><img className='w-[2rem] h-[1.8125rem]' src="images/rain.png" alt="" /></div>
                                <div className='flex flex-col items-start gap-1'>
                                    <div className='text-[#263238] text-[1rem] font-plus-jakarta-sans font-bold'>{props.moonset}</div>
                                    <div className='text-[#475569] text-[0.75rem] font-plus-jakarta-sans'>Moonset</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    : ''
            }
            <hr className='h-[2px] bg-[#E2E8F0] w-full' />
        </div>
    );
}

const DailyDetails = (props) => {
    return (
        <div className='w-[95%] flex flex-col'>
            <div className={`w-[95%] flex flex-col items-start m-4`}>
                <hr className={`h-[2px] bg-[#E2E8F0] w-full ${props.hr}`} />
                <div className='text-[#64748B] text-[0.875rem] font-semibold font-plus-jakarta-sans'>{props.day}</div>
            </div>

            <div className='w-[95%] flex flex-col gap-6 mx-4'>
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
                <Data date='Fri 29' temp='17°C' w_img='images/moon_clouds.png' weather='Partly Cloudy' per='1%' wind='NW 10 km/h' uv='0' humid='72%' moonrise='18:13' moonset='08:27' />
            </div>
        </div>
    );
}

const Daily = () => {
    return (
        <div className='w-full bg-white flex items-center flex-col rounded-[1.25rem]'>
            <div className='w-[95%] flex items-center justify-between m-4 mb-0'>
                <div className='flex flex-col items-start gap-2'>
                    <div className='text-black text-[1.125rem] font-semibold font-mona-sans'>10-Day Weather</div>
                    <div className='text-[#334155] text-[0.875rem] font-plus-jakarta-sans'>As of 19:39 PKT</div>
                </div>
                <div className='text-[#0F172A] text-[0.875rem] font-plus-jakarta-sans px-5 py-2.5 rounded-[3.125rem] bg-[#F1F5F9]'>
                    French Colony Slum, Islamabad Capital Territory
                </div>
            </div>

            <DailyDetails />

        </div>
    );
};

export default Daily;
