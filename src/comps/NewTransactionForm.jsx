import { useState ,useContext } from "react";
import { GlobalContext } from "../logic/GlobalProvider";


const NewTransactionForm = () => {
    const [Text, setText] = useState('');
    const [Amount, setAmount] = useState('');
    const {addTran,visible,setvisible,newId,theme,categories} = useContext(GlobalContext)
    const [sign, setSign] = useState(1);
    const [alert, setAlert] = useState('');
    const [now, setNow] = useState(true);

    return ( 
        <div className={`w-full px-2 h-full flex-1 scroll-p-4 shadow-lg duration-300 md:px-0 md:h-fit backdrop-blur-sm bg-[#0a3b2c9a] md:bg-transparent md:backdrop-blur-0  items-center justify-center top-0 md:top-auto left-0 md:left-auto fixed md:relative md:visible ${visible?'visible flex':' invisible'} `}>

            <form  className={`duration-700 gap-4 h-[50vh] md:h-fit w-full  flex flex-col  ${theme.bgFill2} gap-4 rounded-lg`}>

                <div className={`bg-teal-600  justify-between flex p-2 text-lg pl-4 rounded-t-lg`}>
                    <span className="text-white">New Transaction</span>
                
                        <button
                        className="self-end md:invisible text-white"
                        type="button"
                        onClick={()=>setvisible(false)}>
                            {'back >'}
                        </button>
                </div>
                <div className="flex-col gap-4 justify-between flex px-4 flex-1">

                    <div className="gap-2 flex flex-row">
                    <input
                        id="distany"  
                        className={`rounded-md border text p-1 ${theme.bgFill} border-gray-100 `}
                        type="text"
                        placeholder="where from/to"
                        value={Text}
                        onChange={(e)=>{
                             setText(e.target.value)
                             setAlert('')
                            }}
                            />
                    <select 
                        className={`flex-1 rounded-md border ${theme.bgFill} `} 
                        onChange={e=> {
                            if (e.target.value == 'expeinces'){setSign(-1)}
                            else if (e.target.value == 'income'){setSign(1)}
                        }}
                    >
                        <option value="income">income</option>
                        <option   value="expeinces">expeinces</option>
                    </select>
                    </div>
                    <div className="flex gap-1 flex-row">
                        <div className="flex-col flex">
                            <h2 className={theme.text1st} >Transaction time:</h2>
                            <div className="flex-row flex gap-2">
                                <div className="flex-row flex gap-1">
                                    <input checked={now} value={now} onChange={()=>setNow(prev=>!prev)}  type="checkbox" name=""  />
                                    <span>Now?</span>
                                </div>

                                    <input 
                                    disabled={now}
                                    className={`flex-1 rounded-md border border-gray-100 ${theme.bgFill} `} 
                                    type="date" name="" id="" />
                                </div>
                        </div>
                        <div className="flex-1 flex justify-between flex-col">
                            <h3>categories</h3>
                            <select
                            className={`flex-1 rounded-md border border-gray-100 ${theme.bgFill} `} 
                            name="" id="">
                                {categories.length==0&&  <option>no categories...</option>}
                                {categories.map((categ,index)=>{
                                    <option key={index} value={categ}>{categ.name}</option>
                                }
                                )}
                            </select>
                        </div>
                    </div>
                    
                        {/* amount */}
                    <div>
                    <input 
                    className={`rounded-md border p-1 ${theme.bgFill} border-gray-100 w-full`}
                    type="number"
                    placeholder="the amount"
                    value={Amount}
                    id="amount"
                    onChange={(e)=> {
                        setAmount(e.target.value);
                        
                    }}/>



                    </div>
                        {/* submit button */}
                    <button 
                        className={`py-1 hover:shadow-lg md:hover:text-xl border-2 duration-500 bg-teal-600 ${theme.buttonText1} text-lg rounded-lg`}
                        onClick={(e)=>{
                        e.preventDefault()
                        const date = new Date()
                        const tranTime = {
                            Hours:date.getHours()>12? date.getHours()-12:date.getHours(),
                            Mins:date.getMinutes(),
                            Secs:date.getSeconds(),
                            month : date.getMonth(),
                            day: date.getDate(),
                            weekDay: date.getDay(),
                            year : date.getFullYear()
                        }
                         
                        
                        if (Text.length >0){ 
                            addTran({id:newId() , text: Text , amount :Math.abs(Amount)*sign, tranTime: tranTime})
                            }else{
                            setAlert('you have to add some informations')
                            }
                         setAmount('')   
                         setText('')   
                        document.getElementById('amount').value = Amount
                        document.getElementById('distany').value = Text
                    }
                        }>add
                    </button>
                    <p className="text-red-500 ">{alert}</p>
                </div>
            </form>
        </div>
     );
}
 
export default NewTransactionForm;