const setLocalStorage = () => {
    if (JSON.parse(localStorage.getItem("firstTime"))) {
        localStorage.setItem("agreement:money-laundering-alert", JSON.stringify(true))
        localStorage.setItem("firstTime", JSON.stringify(false))
        localStorage.setItem("theme", JSON.stringify("dark"))
    }
    
}
let chengeValue=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
let getValue = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
export { getValue,chengeValue }
export default setLocalStorage;