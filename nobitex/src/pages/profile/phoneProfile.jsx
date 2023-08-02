import { useState } from "react";

const Phone = () => {
    let [phoneNumber,setPhoneNumber] =useState("09120000000")
    let clickHandller=()=>{
        setPhoneNumber()
    }
    return (
        <div className="flex items-center justify-center gap-4 py-14 bg-[#1F2027] mt-4">
            <p className="text-gray-400 text-xs">شماره تلفن:</p>
            <p className="text-white">{phoneNumber}</p>
            <button onClick={clickHandller} className=" rounded-md bg-purple-600 py-2 px-4 text-white text-sm">ویرایش شماره تلفن</button>
        </div>
    );
}

export default Phone;