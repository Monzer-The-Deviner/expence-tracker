import {useState, createContext } from "react";
export const GlobalContext = createContext()


export const GlobalProvider = ({children})=>{
    //Global states 
    const [transactions, setTransactions] = useState([]);
    const [dates, setDates] = useState([]);
    const [categories, setCategories] = useState([]);
    const [visable, setVisable] = useState(false);
    const [color, setColor] = useState('bg-green-600');
    
    
    //global functions
    const addTran =(newTran)=>{
        setTransactions([...transactions,newTran])
        const{day,month,year} = newTran.tranTime

        let id=Math.floor(Math.random()*10000);
        if(transactions.find(tran=>tran.id==id)!=undefined) Math.floor(Math.random()*10000)

        if (dates.find(el=>el.year==year && el.month==month && el.day==day)==undefined)setDates([...dates,{day:day,month:month,year:year,id:id}])
    }   
    const delTran =(tran,dateTrans,date)=>{

        setTransactions(trans=>trans.filter(t=>t.id != tran.id))
        delDate(dateTrans,date)
    }

    const delDate = (dateTrans,date)=>{
        const {day,month,year} = date
        
        const findTran = dateTrans.length>1 
        if(!findTran){
            const filteredDates = dates.filter(d=>d.day!= day && d.month!=month && d.year != year)
            setDates(filteredDates)
        }
    }
    const newId = ()=>{

        let id = Math.floor(Math.random()*10000)
        if (transactions.find(tran=>tran.id==id)!=undefined) id = Math.floor(Math.random()*10000)
        console.log(id)
        return id
    }

    return(
        <GlobalContext.Provider value={{
            transactions,
            dates,
            visable,
            color,
            categories,
            addTran,
            delTran,
            setVisable,
            setColor,
            setCategories,
            newId

        }}>
            {children}
        </GlobalContext.Provider>
    )
}