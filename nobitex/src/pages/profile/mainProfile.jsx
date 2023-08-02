import { CgProfile } from "react-icons/cg"
import Phone from "./phoneProfile";
const MainProfile = () => {
    return (
        <div className="dark:bg-black">
            <div className="flex items-center py-2">
                <h1 className=" h-full mr-4 text-white font-bold text-xl">حساب کاربری</h1>
            </div>
            <div className="bg-[#1F2027]  py-14 gap-5 flex flex-col  items-center justify-center">
                <div className=" w-full flex  justify-between items-center px-4">

                    <div className="flex items-center gap-3">
                        <div className="">
                            <CgProfile className="w-12 h-12 text-gray-400" />
                        </div>
                        <div className="">
                            <p className="text-white text-xl">amin@gmail</p>
                            <p className="text-gray-200 text-[.6rem]">IP: 5.216.131.223</p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p className="text-gray-400 text-xs text-left">اخرین ورد</p>
                        <p className="text-gray-400 text-xs">1401/05/11</p>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center px-4">
                        <p className="text-gray-400 text-[.6rem]">نام و نام خانوادگی:</p>
                        <p className="text-white ">شاهینی</p>
                    </div>
                    <div className="w-full flex justify-between items-center px-4">
                        <p className="text-gray-400 text-[.6rem]">کدملی</p>
                        <p className="text-white">34****551</p>
                    </div>
                </div>
            </div>
            <Phone/>
        </div>
    );
}

export default MainProfile;