const Footer = () => {
    return ( <div className="flex justify-between gap-2 items-start flex-wrap p-5">
        <div className="w-1/3 text-gray-300 text-sm">
            <h1 className=" text-lg text-white">راهنما</h1>
            <p>راهنمای نوبیتکس</p>
            <p> شروع به کار با نوبیتکس</p>
            <p>خرید و فروش بیت کوین</p>
            <p>سوالات متداول</p>
            <p>سطوح کاربری</p>
            <p>کارمزدها</p>
        </div>
        <div className="w-1/3  text-gray-300 text-sm">
            <h1 className=" text-lg  text-white">نوبیتکس</h1>
            <p>درباره‌ی ما</p>
            <p>تماس با ما</p>
            <p>شرایط استفاده</p>
            <p>بلاگ نوبیتکس</p>
        </div>
        <div className="w-1/3  text-gray-300 text-sm">
                <h1 className=" text-lg  text-white">ویژگی</h1>
                <p>امنیت</p>
                <p>مستندات API</p>
                <p>شبیه‌ساز بازار</p>
                <p>ماشین حساب</p>
        </div>

    </div> );
}
 
export default Footer;