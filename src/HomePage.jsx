/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { NewTransactionForm, Header, TransactionList } from "./comps";
import { GlobalContext } from "./logic/GlobalProvider";

const HomePage = () => {
   
    const {dates,setvisible,visible,theme} = useContext(GlobalContext)

    //testing fake transactios


    
    console.log(dates)
 
    return ( 
        <div className="w-full">
        <Header />
        <div className={`flex w-full gap-8 flex-row pt-2 ${theme.text1st}`}>
            <div className="flex-1 gap-8 flex flex-col justify-center items-center">         
                
                {dates.map((item,index)=><TransactionList key={index} date={item.date} />) } 

            </div>

        <NewTransactionForm />
        </div >
        <button 
        onClick={()=>setvisible(opacity=>!opacity)}
        className={`md:invisible rounded-full text-6xl ${visible?'invisible':'visible'} ${theme.bg3rd} aspect-square w-16 ${theme.text2nd} fixed right-4 bottom-20`}>+</button>
        </div>
     );
}
 
export default HomePage;