const ShowStateProfile = () => {
    return ( <>
    <div className="w-[75vw] bg-[#d9dbdc] p-4 rounded-md">
        <p>وضعیت حساب کاربری</p>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
        <div className="flex justify-between my-3">
            <p className=" text-sm">سطح کاربری :</p>
            <div className="flex flex-col w-1/2 text-gray-700 gap-1">
                <p className="text-xs">شروع فرایند احراز هویت</p>
                <p className="text-xs text-blue-500">ارتقا</p>
            </div>
        </div>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
        <div className="flex justify-between my-3">
            <p className=" text-sm">برداشت روزانه ریال:</p>
            <div className="flex flex-col w-1/2 text-gray-700 gap-1">
                <p className="text-xs">0 از 0 تومان</p> 
            </div>
        </div>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
        <div className="flex justify-between my-3">
            <p className=" text-sm">برداشت روزانه رمز ارز:</p>
            <div className="flex flex-col w-1/2 text-gray-700 gap-1">
                <p className="text-xs">0 از 0 تومان</p> 
            </div>
        </div>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
        <div className="flex justify-between my-3">
            <p className=" text-sm">مجموعه برداشت روزانه:</p>
            <div className="flex flex-col w-1/2 text-gray-700 gap-1">
                <p className="text-xs">0 از 0 تومان</p> 
            </div>
        </div>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
        <div className="flex justify-between my-3">
            <p className=" text-sm ">مجموعه برداشت ماهانه:</p>
            <div className="flex flex-col w-1/2 text-gray-700 gap-1">
                <p className="text-xs">0 از 0 تومان</p> 
            </div>
        </div>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
        <div className="flex justify-between my-3">
            <p className=" text-sm">کارمزد معاملات:</p>
            <div className="flex flex-col w-1/2 text-gray-700 gap-1">
                <p className="text-xs">25%(پله بعد از  0.3%)</p> 
            </div>
        </div>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
        <div className="flex justify-between my-3">
            <p className=" text-sm">ارزش معاملات سی روز:</p>
            <div className="flex flex-col w-1/2 text-gray-700 gap-1">
                <p className="text-xs">(پله بعد از ده میلیون تومان)</p> 
            </div>
        </div>
        <div className="flex justify-center  ">
            <div className=" w-full px-4 mt-3 h-px  bg-gray-400"></div>
        </div>
    </div>
    </> );
}
 
export default ShowStateProfile;