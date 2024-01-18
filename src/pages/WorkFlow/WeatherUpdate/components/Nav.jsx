import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavWorkFlow = (props) => {

    const navigate = useNavigate();

    return (
        <div className='flex items-center w-[95%] justify-between'>
            <Link to={props.backURL}>
                <div className='flex items-center bg-white gap-2 pl-[0.8125rem] pr-[1.125rem] py-2.5 rounded-[1.25rem] cursor-pointer'>
                    <img className='w-5 h-5' src="./images/back.png" alt="" />
                    <div className='text-black text-[0.875rem] font-semibold leading-[normal] font-mona-sans'>Back</div>
                </div>
            </Link>

            <div className='flex items-center gap-[0.6875rem]'>
                <div className='flex items-center bg-white gap-2 pl-[0.8125rem] pr-[1.125rem] py-2.5 rounded-[1.25rem] cursor-pointer'>
                    <img className='w-5 h-5' src="./images/sync.png" alt="" />
                    <div className='text-black text-[0.875rem] font-semibold leading-[normal] font-mona-sans'>Sync with Apple Watch</div>
                </div>

                <div className='flex items-center bg-white gap-2 pl-[0.8125rem] pr-[1.125rem] py-2.5 rounded-[1.25rem] cursor-pointer'>
                    <img className='w-5 h-5' src="./images/save.png" alt="" />
                    <div className='text-black text-[0.875rem] font-semibold leading-[normal] font-mona-sans'>Save</div>
                </div>
            </div>
        </div>
    );
};

export default NavWorkFlow;
