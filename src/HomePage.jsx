import { useContext } from "react";
import { NewTransactionForm, Header, Transaction, } from "./comps";
import { GlobalContext } from "./cotext/GlobalProvider";

const HomePage = () => {
   
    const {transactions,dates,setVisable,visable} = useContext(GlobalContext)
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
        <div className="flex w-full flex-row pt-2 ">
        <div className="flex-1 flex flex-col justify-center items-center"> 
            {dates.map(date=>(
                <div className="flex justify-center flex-col items-center w-full" key={date.id}>

                    <div className="px-2 py-1 bg-[#2C5056] text-sm justify-self-center w-fit h-fit rounded-full shadow-md  text-white">
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
        onClick={()=>setVisable(opacity=>!opacity)}
        className={`md:invisible rounded-full text-6xl ${visable?'opacity-0':'opacity-100'} bg-[#2C5056] aspect-square w-16 text-white fixed right-4 bottom-20`}>+</button>
        </>
     );
}
 
export default HomePage;