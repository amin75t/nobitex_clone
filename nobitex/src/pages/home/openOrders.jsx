const OpenOrders = () => {
    return (
         <div className="w-[75vw] bg-[#d9dbdc] p-4 rounded-md">
                <p>سفارشات باز شما</p>
                <div className="flex justify-center  ">
                    <div className=" w-full px-4 mt-6 h-px  bg-gray-400"></div>
                </div>
                <div className="pb-16">
                    <ul className="flex items-center justify-center gap-4 text-center text-sm">
                        <li>سمت</li>
                        <li>قیمت سفارشات</li>
                        <li>مقدار ارز</li>
                        <li>مبلغ کل</li>
                        <li>اقدامات</li>
                    </ul>
                    <div className="w-full h-6 bg-gray-400"></div>
                </div>
        </div> 
    );
}
 
export default OpenOrders;