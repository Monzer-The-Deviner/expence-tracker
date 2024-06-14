/* eslint-disable react/prop-types */
import { useState, useContext  } from "react"
import deleteIcon from "../Assets/trash-can.svg"
import { GlobalContext } from "../context/GlobalProvider"

const Transaction = ({transaction,dateTrans,date}) => {
    const { delTran,theme} = useContext(GlobalContext)
    const {text, amount} = transaction
        ,sign = amount>0? "+":"-"
        ,[options,setOptions] = useState(false) 
    return ( 
        <div 
            onMouseOver={()=>setOptions(true)}
            onMouseLeave={()=>setOptions(false)}
            className="m-2 h-8 w-full">

                <div 
                className={`${theme.text2nd} p-1 w-full -z-0  flex bg-red-600 justify-end items-center text-lg  rounded-md hover:shadow-lg shadow-md`}>
                    <img src={deleteIcon}
                        className=" invert"
                        alt="del" 
                        onClick={()=>delTran(transaction,dateTrans,date)}
                        width="18px"
                        />
                </div>  
                <div 
                
                className={`${theme.bgFill2} ${options?'w-[80%]':'w-full'} flex-row flex justify-between -translate-y-full relative  items-center  pl-16 text-lg rounded-md hover:shadow-lg shadow-md duration-500`}>
                    <p className={`overflow-hidden h-8`}>{text}</p> 
                    <p className={` w-20 text-right pr-2 rounded-md border-r-4 h-full ${(amount>0)?'border-green-600':'border-red-600'}`} >{sign}${Math.abs(amount)}</p>
                    
                </div>
        </div>
    );
}
 
export default Transaction;