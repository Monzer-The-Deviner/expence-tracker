/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import Chart from "./comps/Chart";
import { GlobalContext } from "./logic/GlobalProvider";
import { Link } from "react-router-dom";

const AnaliticsPage = () => {
    const { transactions,data, setData,theme,dates,setDates} = useContext(GlobalContext);
    const [selectedPioriod, setPioriod] = useState(7);
    const updateData = (data1,data2)=>{
        const updataedData ={}
        try {
            Object.keys(data).forEach((element) => {
                updataedData[element] = {...data[element],data1:data1[element],data2:data2[element]}
                setData(updataedData);
            });
        } catch (error) {
            console.error(error);
        }

    }

    const getReports = (pioriodObj)=>{
        try {
            const transNumber = pioriodObj.map(el => el.amounts.length);
            const tranAmount = pioriodObj.map(el => el.amounts.reduce((p, c) => p + c, 0));
            const incomesNum = pioriodObj.map(el => el.amounts.filter(a => a > 0).length);
            const incomesAmount = pioriodObj.map(el => el.amounts.filter(a => a > 0).reduce((p, c) => p + c, 0));
            const expNumber = pioriodObj.map(el => el.amounts.filter(a => a < 0).length);
            const expAmount = pioriodObj.map(el => el.amounts.filter(a => a < 0).reduce((p, c) => p + c, 0));
            return {transNumber, tranAmount, incomesNum, incomesAmount, expNumber, expAmount}
        } catch (error) {
            console.log(error,pioriodObj)
        }

    }
    
//adding days on the pioriod arrays
    const currentPioriod = [];
    const prevPioriod = [];
    console.log(dates);
    for (let index = 0; index < selectedPioriod; index++) {
            currentPioriod.push(dates[(dates.length-1)-index])
            prevPioriod.push(dates[(dates.length - selectedPioriod)-index])
    }

    useEffect(() => {  updateData(getReports(currentPioriod),getReports(prevPioriod)) }
        , [selectedPioriod, transactions,dates]);
    const analisticsList = Object.entries(data);
    return (
        <div className="flex min-h-screen flex-col">

            {analisticsList.length>0?analisticsList.map(([key, element], index) => (
                element.visible && (
                    <div key={index} className={`rounded-md items-center justify-between mb-2 flex flex-col ${(index + 1) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} shadow-md h-32 ${theme.bgFill2}`}>
                        <div className="md:w-[48%] rounded-md bg-emerald-700">
                            <h1>{element.data}</h1>
                        </div>
                        <div className="md:w-[48%] h-full w-72 rounded-md overflow-hidden border">
                            <Chart data1={element.data2} data2={element.data1} />
                        </div>
                    </div>
                ))):
                
                <div className="top-1/2 absolute self-center flex flex-col gap-4">
                    
                    <h1 className="text-3xl font-bold">No analytics avalible</h1>
                    <Link className="bg-teal-600 text-white px-4 rounded-md py-2 self-center" to={'/'}>Home page</Link>
                </div>
            
            }

        </div>
    );
}

export default AnaliticsPage;
