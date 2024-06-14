import { useContext,useState } from "react";
import { Transaction } from "./comps";
import NewCategory from "./comps/newCategory";
import { GlobalContext } from "./context/GlobalProvider";

const categoriesPage = () => {
    const {categories,transactions,theme}=useContext(GlobalContext)
    const [selectedCateg, setSelectedCateg] = useState('') 
    const filterdTransactions = transactions.filter(tran=>tran.category==selectedCateg)
    return ( 
        <div className="h-full w-full flex flex-row">

            <div className="flex lg:w-[25vw] lg:flex-initial md:flex-1  flex-col ">

                <div className="rounded-lg m-2 flex-col hover:overflow-y-scroll  shadow-xl overflow-hidden flex-1">
                    <div className=" flex h-32 .scroll-container">
                        <div className="flex-1 m-1 rounded-lg bg-green-600 flex"></div>
                        <div className="flex-1  m-1 rounded-lg bg-green-600 flex"></div>
                    </div>
                    {categories.map((categ,i)=>
                    <div 
                    key={i}
                    onClick={()=>setSelectedCateg(categ.name)}
                    className={` h-16 m-1 flex rounded-md ${theme.bgFill2} shadow-md`}>
                        <h1 className={`aspect-square ${theme.text2nd} ${categ.color} rounded-md text-4xl text-center flex justify-center items-center `}>70</h1>
                    </div>)}

                </div>
                <NewCategory />

            </div>

            <div className="flex-1 m-2 flex-col">
                    {filterdTransactions.map(tran=><Transaction transaction={tran} key={tran.id}/>)}
            </div>
        </div>
     );
}
 
export default categoriesPage;