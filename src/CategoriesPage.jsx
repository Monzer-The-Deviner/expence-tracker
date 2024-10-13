import { useContext,useState } from "react";
import { Transaction } from "./comps";
import NewCategory from "./comps/newCategory";
import { GlobalContext } from "./logic/GlobalProvider";

const CategoriesPage = () => {
    const { visible,setvisible,categories,transactions,theme}=useContext(GlobalContext)
    const [selectedCateg, setSelectedCateg] = useState('') 
    const filterdTransactions = transactions.filter(tran=>tran.category==selectedCateg)
    const transNumber = transactions.length||0
    const categNumber = categories.length||0
    return ( 
        <div className="h-full flex-col  w-full flex md:flex-row">

            <div className="flex md:w-90 w-full flex-1  flex-col ">

                <div className="rounded-lg flex-col shadow-xl overflow-hidden flex-1">
                    <div className=" flex h-32 gap-2 .scroll-container">
                        <div className="flex-1  rounded-lg flex-col items-center justify-center bg-green-600 flex">
                            <h3 className="text-5xl text-white">{transNumber}</h3>
                            <span className="text-white"> transactions</span>
                        </div>
                        <div className="flex-1  rounded-lg flex-col items-center justify-center bg-green-600 flex">
                            <h3 className="text-5xl text-white">{categNumber}</h3>
                            <span className="text-white"> categories</span>
                        </div>

                    </div>
                    <div className="overflow-y-scroll max-h-40 mt-3 flex flex-col gap-1">

                        {categories.map((categ,i)=>
                        <div 
                        key={i}
                        onClick={()=>setSelectedCateg(categ.name)}
                        className={` h-32 gap-4 flex rounded-md ${theme.bgFill2} shadow-md`}>
                            <h1 className={`aspect-square ${theme.text2nd} ${categ.color} rounded-md text-4xl text-center flex justify-center items-center `}>{transactions.filter(tran=>tran.category==categ).length||0}</h1>
                            <p className="text-xl self-center">{categ.name}</p>
                        </div>)}

                    </div>
                </div>
                <NewCategory />

            </div>

            <div className="flex-1 m-2 flex-col">
                <div className="p-2 border-b border-teal-700 text-teal-800">
                    transactions

                </div>
                    {filterdTransactions.map(tran=><Transaction transaction={tran} key={tran.id}/>)}
            </div>
            <button 
        onClick={()=>setvisible(opacity=>!opacity)}
        className={`md:invisible rounded-full text-3xl ${visible?'invisible':'visible'} ${theme.bg3rd} size-12 ${theme.text2nd} fixed right-4 pb-1 bottom-20`}>+</button>
        </div>
     );
}
 
export default CategoriesPage;