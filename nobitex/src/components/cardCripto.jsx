import {BsCurrencyBitcoin} from "react-icons/bs"
import {FaEthereum} from "react-icons/fa"
import {SiLitecoin} from "react-icons/si"
import {SiTether} from "react-icons/si"
import {SiRipple} from "react-icons/si"
import {SiBitcoincash} from "react-icons/si"


const CardCripto = ({name,bg}) => {

   let getLogo=(name)=>{
        switch (name){
            case "btc":
                return <BsCurrencyBitcoin className="w-10 h-10 text-white"/>
            case "eth":
                return <FaEthereum className="w-10 h-10 text-white"/>
            case "ltc":
                return <SiLitecoin className="w-10 h-10 text-white"/>
            case "usdt":
                return <SiTether className="w-10 h-10 text-white"/>
            case "xrp":
                return <SiRipple className="w-10 h-10 text-white"/>
            case "bch":
                return <SiBitcoincash className="w-10 h-10 text-white"/>
        }
    }

    return ( 
    <div className="w-[70vw] rounded-md bg-white h-64 border flex lex-col items-start justify-center">
            <div className={`w-full bg-ye h-2/6 rounded-md ${bg}   flex items-center justify-center`}>
               {getLogo(name)}
            </div>
    </div> 
    );
}
 
export default CardCripto;