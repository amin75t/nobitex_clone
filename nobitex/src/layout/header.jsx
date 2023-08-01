
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSolidBellRing } from 'react-icons/bi';
import HeaderMenu from './headermenu';
import { useState } from 'react';

const Header = () => {
    let [moveMenu,setMoveMenu]=useState(true)
    let clickHandller=()=>{
        setMoveMenu(!moveMenu)
    }
    return (
        <>
            <div className="bg-header border-b border-white flex flex-row-reverse items-center justify-between  px-6 w-full h-[10vh] bg-slate-400">

                <div className="flex items-center gap-3 justify-center h-full ">
                    <h1 className='text-white'>NOBITEX</h1>
                    <AiOutlineMenu onClick={clickHandller} className='text-white w-5 h-5' />
                </div>
                <div className="flex items-center gap-7 justify-center h-full">
                    <BsFillPersonFill className='w-5 h-5 text-yellow-200' />
                    <BiSolidBellRing className='w-5 h-5 text-gray-200' />
                </div>

            </div>
            <div onClick={clickHandller} className={!moveMenu?"fixed top-[10vh] left-0 w-full h-full bg-transparent":undefined}></div>
            <HeaderMenu moveMenu={moveMenu}/>
        </>
    );
}

export default Header;