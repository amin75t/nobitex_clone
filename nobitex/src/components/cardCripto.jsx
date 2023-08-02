import { BsCurrencyBitcoin } from "react-icons/bs"
import { FaEthereum } from "react-icons/fa"
import { SiLitecoin } from "react-icons/si"
import { SiTether } from "react-icons/si"
import { SiRipple } from "react-icons/si"
import { SiBitcoincash } from "react-icons/si"


const CardCripto = ({ name, bg, state }) => {

    let getLogo = (name) => {
        switch (name) {
            case "btc":
                return <BsCurrencyBitcoin className="w-10 h-10 text-white" />
            case "eth":
                return <FaEthereum className="w-10 h-10 text-white" />
            case "ltc":
                return <SiLitecoin className="w-10 h-10 text-white" />
            case "usdt":
                return <SiTether className="w-10 h-10 text-white" />
            case "xrp":
                return <SiRipple className="w-10 h-10 text-white" />
            case "bch":
                return <SiBitcoincash className="w-10 h-10 text-white" />
        }
    }

    return (
        <div className="w-[75vw] gap-2 rounded-md bg-white border flex flex-col items-center justify-start">
            <div className={`w-full bg-ye py-8 rounded-md ${bg}   flex items-center justify-center`}>
                {getLogo(name)}
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex items-center flex-row-reverse justify-center">
                    <p className="font-bold">1/485/9000/000</p>
                    <p className="text-sm text-gray-400 font-thin">تومان</p>
                </div>
                <div className={`border text-white font-semibold ${state?"bg-green-600":"bg-red-600"} text-center w-fit py-px px-2 h-fit rounded-md`}>1.26%</div>
            </div>
            <div className="border border-gray-300 w-2/3"></div>
            <div className="flex flex-col w-full items-center justify-center">
                <p className="font-bold">1/485/9000/000</p>
                <div className="flex items-center gap-2 flex-row-reverse justify-center mb2">
                    <p className="text-sm text-gray-400 font-thin">حداقل</p>
                    <p className="text-sm text-gray-400 font-thin">تومان</p>
                </div>

            </div>
            <div className="border border-gray-300 w-2/3"></div>
            <div className="flex flex-col w-full items-center justify-center">
                <p className="font-bold">1/485/9000/000</p>
                <div className="flex items-center gap-2 flex-row-reverse justify-center mb2">
                    <p className="text-sm text-gray-400 font-thin">حداقل</p>
                    <p className="text-sm text-gray-400 font-thin">تومان</p>
                </div>

            </div>
        </div>
    );
}

export default CardCripto;