
import {useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import logo from "../Assets/chart-line.svg"
const Header = ({task}) => {
    const {transactions,theme} = useContext(GlobalContext);
    const amounts =transactions.map(tran => tran.amount)
    const total = amounts.length>0? amounts.length>1?amounts.reduce((acc,amount)=> acc+amount):amounts[0]:0
    console.log(theme)
    // incomes and expences
    
    const incomes = amounts.filter(amount=>amount>0)
    const expences = amounts.filter(amount=>amount<0)
    const totalincome = incomes.length>0? incomes.length>1?incomes.reduce((acc,amount)=> acc+amount):incomes[0]:0
    const totalExpence = expences.length>0? expences.length>1?expences.reduce((acc,amount)=> acc+amount):expences[0]:0
    
    const sign = total==0?"":total>0?'+':'-'
    const color = total<0? 'text-red-500':'text-green-500'
    
    return ( 
        <div className={` ${theme.bgFill2} shadow-xl rounded-b-lg md:w-full p-4 md:p-8 flex flex-col md:flex-row justify-between`}>
            
            <div className={`flex items-end pl-4 text-white text-5xl p-2 w-full mb-2 md:mb-0 md:mr-4 h-32 rounded-md ${total>=0?theme.bg1st:theme.bg1st_2}`} ><span className="text-sm self-start pt-2">your total amount:</span>
                <div className="bottom-10 text-7xl"><span className={`${color}`}>{sign}</span>${Math.abs(total)}</div>
            </div>

            <div className={`flex flex-row md:flex-col justify-between  w-full mt-2 md:mt-0 md:ml-4 text-3xl h-12 md:h-auto text-white`}>
                <div className=" flex-1 mr-1 md:mr-0 md:mb-1 rounded-lg text-white bg-red-600 justify-between pr-4 items-center flex pl-4">
                <span className="text-sm self-start  text-white pt-2">Expenses: </span>
                    ${Math.abs(totalExpence)}</div>
                <div className="flex-1 ml-1 md:ml-0 md:mt-1 rounded-lg bg-green-600 justify-between pr-4 items-center flex pl-4">
                <span className="text-sm self-start  text-white pt-2">Incomes: </span>
                    ${Math.abs(totalincome)}</div>
            </div>

        </div>
     );
}
 
export default Header;