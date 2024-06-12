import { useContext,useState } from "react";
import { GlobalContext } from "../cotext/GlobalProvider";

const NewCategory = () => {
    const [name, setName] = useState('');
    const {color, setColor,setCategories,categories,theme}=useContext(GlobalContext)
    const [expOrIncome, setexpOrIncome] = useState('both');
    return ( 
        <>
            <div className={`${theme.bgFill2} m-2 flex flex-1 rounded-md flex-col shadow-xl `}>
                <div className={`${color} text-white p-2 text-lg pl-4 rounded-t-lg`}>New Category</div>
                <form className="flex justify-start flex-col p-4 h-full" >
                    <label htmlFor="category name">Category name: </label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="name" className={`rounded-md border p-1 ${theme.bgFill} border-gray-500 m-2`}/>
                    
                    <div className="flex-1 flex justify-around text-gray-800 text-sm">
                    <div className="flex items-center"><input type="checkbox" className=""/><span className={`p-1 ${theme.text1st}`}>incomes</span></div>
                    <div className="flex items-center"> <input type="checkbox" name="expencies only" /> <span className={`p-1 ${theme.text1st}`}>expeinces </span> </div>
                    </div>
                    <label htmlFor="color">chose a color</label>
                    <div className="flex gap-2 my-4 ">
                        <div className="aspect-square rounded-full w-8 bg-orange-400" onClick={()=>setColor('bg-orange-400')} ></div>
                        <div className="aspect-square rounded-full w-8 bg-red-500" onClick={()=>setColor('bg-red-500')} ></div>
                        <div className="aspect-square rounded-full w-8 bg-green-400" onClick={()=>setColor('bg-green-400')} ></div>
                        <div className="aspect-square rounded-full w-8 bg-blue-600"onClick={()=>setColor('bg-blue-600')}></div>
                        <div className="aspect-square rounded-full w-8 bg-green-600"onClick={()=>setColor('bg-green-600')}></div>
                        <div className="aspect-square rounded-full w-8 bg-yellow-400"onClick={()=>setColor('bg-yellow-400')}></div>
                        <div className="aspect-square rounded-full w-8 bg-purple-700"onClick={()=>setColor('bg-purple-700')}></div>
                    </div>

                    <button type="submit" 
                    className={` text-lg  rounded-md ${theme.buttonBg1} ${theme.buttonText1}`}
                    onClick={(e)=>{
                        e.preventDefault()
                        const newCateg = {
                            name:name,
                            color:color,
                        }
                        console.log(newCateg)
                        setCategories([...categories,newCateg])
                    }}>create</button>
                </form>
            </div>  
        </>
     );
}
 
export default NewCategory;