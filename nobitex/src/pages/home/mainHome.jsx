import { useState } from "react";
import { chengeValue, getValue } from "../../hooks/setLocalStorage";
import CardCripto from '../../components/cardCripto'
import criptos from "../../data/cripto";
const MainHome = () => {
    let [show, setShow] = useState(getValue("agreement:money-laundering-alert"))

    let clickHandller = () => {
        chengeValue("agreement:money-laundering-alert", false)
        setShow(false)
    }
    return (
        <div className="flex flex-col h-auto items-center justify-center gap-4 mt-5 ">
            <div className="flex items-center justify-end w-full px-4">
                <button className="w-fit py-1 px-5 rounded text-white border border-yellow-400">درجه بندی</button>
            </div>
            {show ?
                <div className="flex flex-col justify-center items-center px-4 text-yellow-400">
                    <p className="text-center text-sm">
                        توجه: از "اجاره دادن" حساب کاربری خود به دیگران یا "واریز رمز ارز افراد ناشناس" به کیف پول خود به بهانه مشارکت در سود معامله یا وعده دریافت پول جدا خودداری کنید.
                    </p>
                    <p className="text-center text-sm">طبق اعلام پلیس فتا در صورت کلاهبرداری و پولشویی توسط دیگران، حساب شما نیز به عنوان مشارکت در جرم شناسایی خواهد شد.
                    </p>
                    <button onClick={clickHandller} className="w-fit py-1 px-5 rounded text-white mt-4 bg-red-500">خواندم</button>
                </div> : undefined}
                <div className="bg-header w-full flex-col flex items-center gap-5 pt-2 ">
                    {criptos.map((cripto)=>{
                        return <CardCripto name={cripto.name} bg={cripto.color} state={cripto.state}/>
                    })}
                    
                </div>
        </div>);
}

export default MainHome;