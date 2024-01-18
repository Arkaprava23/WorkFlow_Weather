import React, { useState } from 'react';
import { Datepicker } from 'flowbite-react';
import { Dropdown, DatePicker } from "keep-react";

const WelcomeNav = () => {

    const [style, setStyle] = useState(false);

    const [temp, setTemp] = useState(false);

    const [status, setStatus] = useState(false);

    const [date, setDate] = useState(null);

    const clicked = () => {
        setStyle(state => !state);
    }

    const centiClicked = () => {
        setTemp(true);
    }

    const farenClicked = () => {
        setTemp(false);
    }

    const locationClicked = () => {
        setStatus(status => !status);
    }

    return (
        <div className='flex items-center justify-between w-[95%] bg-white py-3 rounded-[0.75rem]'>
            <div className='flex items-start flex-col ml-3'>
                <div className='text-dark text-[0.875rem] font-normal font-plus-jakarta-sans'>Good Morning, Usman</div>
                <div className='text-dark text-[1.125rem] font-bold font-plus-jakarta-sans'>Here’s today’s weather for Las Vegas, CA</div>
            </div>

            <div className='flex items-center justify-between gap-6'>
                <div className='flex items-center border border-[#E2E8F0] rounded-[1.5625rem] border-solid pl-[0.94rem]'>
                    <img src="./images/search.png" className='w-5 h-5' alt="" />
                    <input
                        className='outline-none border-none rounded-r-[1.5625rem]'
                        type="search" placeholder='Search city or postal code' name="" id="" />
                </div>

                <div className='flex items-center gap-4'>
                    <div>
                        <input type="date" name="" id="" style={{
                            color: 'black',
                            width: '8.5rem',
                            borderRadius: '1.5625rem',
                            border: '1px solid #E2E8F0',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '0.875rem',
                            width: 'fit-content',
                            background: '#F1F5F9',
                            cursor: 'pointer',
                        }} />
                    </div>

                    <Dropdown
                        label={
                            <div className='flex items-center gap-2'>
                                <img src={status ? "images/location-w.svg" : "images/location.svg"} alt="" />
                                <div className={`text-[0.875rem] font-plus-jakarta-sans ${status ? 'text-white' : 'text-black'}`}>Las Vegas, CA</div>
                            </div>
                        }
                        dismissOnClick={true}
                        arrowIcon={false}
                        placement='bottom-end'
                        className='flex items-center justify-center font-plus-jakarta-sans rounded-[1.5625rem]'
                        style={status ?
                            {
                                background: '#6366F1',
                                fontFamily: "Plus Jakarta Sans",
                                outline: 'none',
                                borderRadius: '1.5625rem'
                            } :
                            {
                                background: '#F1F5F9',
                                fontFamily: "Plus Jakarta Sans",
                                outline: 'none',
                                borderRadius: '1.5625rem'
                            }}
                        onClick={locationClicked}
                    >
                        <div className='flex items-center border border-[#E2E8F0] rounded-[1.5625rem] border-solid pl-[0.94rem] mr-11'>
                            <img src="./images/search.png" className='w-5 h-5' alt="" />
                            <input
                                className='outline-none border-none rounded-r-[1.5625rem]'
                                type="search" placeholder='Search city or postal code' name="" id="" />
                        </div>

                        {/* <Dropdown.Item>

                        </Dropdown.Item> */}
                    </Dropdown>

                    <div className='flex items-center border border-[#E2E8F0] rounded-[1.5625rem] border-solid bg-[#EEF2FF] gap-1 mr-3'>
                        <div className={temp ? 'text-white font-plus-jakarta-sans text-[1rem] font-bold p-[0.56rem] rounded-[50%] bg-[#6366F1]' : 'text-black font-plus-jakarta-sans text-[1rem] font-bold p-[0.56rem] rounded-[50%] cursor-pointer'}
                            onClick={centiClicked}>
                            C°
                        </div>
                        <div className={!temp ? 'text-white font-plus-jakarta-sans text-[1rem] font-bold p-[0.56rem] rounded-[50%] bg-[#6366F1]' : 'text-black font-plus-jakarta-sans text-[1rem] font-bold p-[0.56rem] rounded-[50%] cursor-pointer'}
                            onClick={farenClicked}>
                            F °
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WelcomeNav;
