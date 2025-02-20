/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {useState, createContext } from "react";
import { themes } from "../Assets/theme";


export const GlobalContext = createContext()


export const GlobalProvider = ({children})=>{
    // saving global data in local storage
    const saveToStorage = (key,value)=>{
        const strValue = typeof value == 'string'?value: JSON.stringify(value)
        localStorage.setItem(key,strValue)
    }
    const restoreFromStorage = (key)=>{
        try {
            const value = localStorage.getItem(key)
            ;
            return value? JSON.parse(value):null
        } catch (error) {
            console.log(error);
        }
    }


    //Global states 
    const [transactions, setTransactions] = useState(()=>restoreFromStorage('transactions')||[]);
    const [dates, setDates] = useState(()=>restoreFromStorage('dates')||[]);
    const [categories, setCategories] = useState(()=>restoreFromStorage('categories')||[]);
    const [visible, setvisible] = useState(false);
    const [color, setColor] = useState('bg-green-600');
    const [data, setData] = useState({
        transNumber: restoreFromStorage('transNumber')||{ visible: true, data1: [],data2: [] },
        tranAmount: restoreFromStorage('tranAmount')||{ visible: true, data1: [],data2: [] },
        incomesNum: restoreFromStorage('incomesNum')||{ visible: true, data1: [],data2: [] },
        incomesAmount: restoreFromStorage('incomesAmount')||{ visible: true, data1: [],data2: [] },
        expNumber:restoreFromStorage('expNumber')|| { visible: true, data1: [],data2: [] },
        expAmount: restoreFromStorage('expAmount')||{ visible: true, data1: [],data2: []}
    });
    const [theme, setTheme] = useState(themes[0]);

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
            
            return id
        }

        const changeVisibility = (prop) => {
            const updatedData = { ...data, [prop]: { ...data[prop], visible: !data[prop].visible } };
            setData(updatedData);
            console.log(data)
            
        };

        const handleChoose = (theme)=>{
            setTheme(theme)
        }


    useEffect(()=>{
    saveToStorage('transactions',transactions)
    saveToStorage('dates',dates)
    saveToStorage('categories',categories)
    Object.entries(data).map(([key,value])=>
        saveToStorage(key,value)
    )
    },[transactions,dates,categories,data]) 
    return(
        <GlobalContext.Provider value={{
            transactions,
            dates,
            visible,
            color,
            categories,
            data,
            theme,
            addTran,
            delTran,
            setvisible,
            setColor,
            setCategories,
            newId,
            changeVisibility,
            setData,
            saveToStorage,
            restoreFromStorage,
            handleChoose,


        }}>
            {children}
        </GlobalContext.Provider>
    )
}