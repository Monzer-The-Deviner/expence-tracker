import { useState ,useContext } from "react";
import { GlobalContext } from "../cotext/GlobalProvider";
import Transaction from "./Transaction";

const NewTransactionForm = () => {
    const [Text, setText] = useState('');
    const [Amount, setAmount] = useState('');
    const {addTran,transactions,visable,newId} = useContext(GlobalContext)
    const [sign, setSign] = useState(1);
    const [alert, setAlert] = useState('');
    

    return ( 
        <div className={`w-full px-2 h-full flex-1 m-2 shadow-lg duration-300 md:px-0 md:h-fit backdrop-blur-md bg-[#0f58425e] md:bg-transparent md:backdrop-blur-0 flex items-center justify-center top-0 md:top-auto left-0 md:left-auto fixed md:relative md:opacity-100 ${visable?'opacity-100':'opacity-0 '} `}>

            <div className={`md:flex duration-700 h-[50vh]  md:h-fit w-full border-t-2 justify-center  flex flex-col p-4 bg-white rounded-lg`}>
                    
                    <div className="flex flex-row">
                    <input
                        id="distany"  
                        className=""
                        type="text"
                        placeholder="where from/to"
                        value={Text}
                        onChange={(e)=>{
                             setText(e.target.value)
                             setAlert('')
                            }}
                            />
                    <select 
                        className="flex-1 rounded-sm "
                        onChange={e=> {
                            if (e.target.value == 'expeinces'){setSign(-1)}
                            else if (e.target.value == 'income'){setSign(1)}
                        }}
                    >
                        <option className="text-green-500 focus:bg-inherit" value="income">income</option>
                        <option className="text-red-500"  value="expeinces">expeinces</option>
                    </select>
                    </div>

                    
                        {/* amount */}
                    <div>
                    <input 
                    className="w-full my-2"
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
                        className="py-1 hover:shadow-lg md:hover:text-xl border-2 duration-500 bg-green-500 text-white text-lg rounded-md"
                        onClick={()=>{
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
        </div>
     );
}
 
export default NewTransactionForm;