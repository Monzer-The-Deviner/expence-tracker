import { useContext } from "react";
import { NewTransactionForm, Header, Transaction, } from "./comps";
import { GlobalContext } from "./context/GlobalProvider";

const HomePage = () => {
   
    const {transactions,dates,setvisible,visible,theme} = useContext(GlobalContext)
    const filteredTrans = (date)=>{
        if (!date || typeof date !== 'object') {
            return [];
        }

        return transactions.filter(tran => (
            tran.tranTime.year === date.year &&
            tran.tranTime.month === date.month &&
            tran.tranTime.day === date.day
        ));
    }  
    return ( 
        <>
        <Header />
        <div className={`flex w-full flex-row pt-2 ${theme.text1st}`}>
        <div className="flex-1 flex flex-col justify-center items-center"> 
            {dates.map((date,index)=>(
                <div className="flex justify-center flex-col items-center w-full" key={index}>

                    <div className={`px-2 py-1 ${theme.bg3rd} text-white text-sm justify-self-center w-fit h-fit rounded-full shadow-md  ${theme.text2nd}`}>
                        {date.month+1}/{date.day}/{date.year}
                    </div>

                    {typeof date=='object'&&filteredTrans(date).map(tran=>(
                        <Transaction 
                        key={tran.id}
                        transaction={tran}
                        dateTrans={filteredTrans(date)}
                        date ={date} />
                    ))}
                    
                </div>
            ))}
        </div>

        <NewTransactionForm />
        </div >
        <button 
        onClick={()=>setvisible(opacity=>!opacity)}
        className={`md:invisible rounded-full text-6xl ${visible?'opacity-0':'opacity-100'} ${theme.bg3rd} aspect-square w-16 ${theme.text2nd} fixed right-4 bottom-20`}>+</button>
        </>
     );
}
 
export default HomePage;