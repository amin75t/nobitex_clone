import { BsClipboard2CheckFill } from 'react-icons/bs'
import { BsClipboard2Fill } from 'react-icons/bs'
import { FaWallet } from 'react-icons/fa'
import { BsCardChecklist } from 'react-icons/bs'
import { RiShakeHandsFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react'

const HeaderMenuy = ({moveMenu}) => {
   

    return (
        <div className={`bg-header fixed w-[40vw] top-[10vh] right-0 h-screen transition duration-300 ease-in-ou ${moveMenu&& " translate-x-[40vw]"} `}>
            <ul className='w-full pt-4 h-full flex flex-col
             justify-start gap-6 items-end '>
                <li className='flex w-full items-center justify-end gap-3 px-3'>
                    <h1 className='text-white'>داشبورد</h1>
                    <BsClipboard2Fill className='text-gray-400' />
                </li>
                <li className='flex w-full items-center justify-end gap-3 px-3'>
                    <h1 className='text-white'>حسابداری</h1>
                    <BsClipboard2CheckFill className='text-gray-400' />
                </li>
                <li className='flex w-full items-center justify-end gap-3 px-3'>
                    <h1 className='text-white'>کیف پول من</h1>
                    <FaWallet className='text-gray-400' />
                </li>
                <li className='flex w-full items-center justify-end gap-3 px-3'>
                    <h1 className='text-white'>سفارشات باز</h1>
                    <BsCardChecklist className='text-gray-400' />
                </li>
                <li className='flex w-full items-center justify-end gap-3 px-3'>
                    <h1 className='text-white'>بازار اصلی</h1>
                    <RiShakeHandsFill className='text-gray-400' />
                </li>
                <li className='flex w-full items-center justify-end gap-3 px-3'>
                    <h1 className='text-white'>بازار حرفه ای</h1>

                    <RiShakeHandsFill className='text-gray-400' />
                </li>
                <li className='flex w-full items-center justify-end gap-3 px-3'>
                    <h1 className='text-white'>پروفایل</h1>
                    <CgProfile className='text-gray-400' />
                </li>
            </ul>
        </div>
    );
}

export default HeaderMenuy;