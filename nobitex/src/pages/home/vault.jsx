const Vault = () => {
    return (<>
   <div className="w-[75vw] bg-[#d9dbdc]  p-4 rounded-md">  
     <div className="flex justify-between">
        <p>کیف های شما</p>
        <button className="border border-black px-2 py-1 rounded-md text-sm">پرتفو ...</button>
        </div>
    <div className="flex justify-center mt-40 ">
    <div className=" w-64 h-px  bg-gray-400"></div>    
    </div>
    <div className="flex items-center justify-evenly mt-2 ">
    <p className=" text-sm">ارزش تخمین دارایی ها:</p>
    <div className="flex flex-col gap-2">
        <p className="text-xs">پیشنهاد های خرید</p>
        <div className="flex justify-center">
            <div className=" w-full h-px  bg-gray-400"></div>    
        </div>
        <p className="text-xs">پیشنهاد های فروش</p>
    </div>
    </div>
            
   </div>
    
    </>);
}
 
export default Vault;