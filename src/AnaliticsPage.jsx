import { useContext, useState, useEffect } from "react";
import Chart from "./comps/chart";
import { GlobalContext } from "./cotext/GlobalProvider";

const AnaliticsPage = () => {
    const { transactions } = useContext(GlobalContext);
    const [pioriod, setPioriod] = useState('week');
    const [data, setData] = useState({
        transNumber: { visable: true, data1: [],data2: [] },
        tranAmount: { visable: true, data1: [],data2: [] },
        incomesNum: { visable: true, data1: [],data2: [] },
        incomesAmount: { visable: true, data1: [],data2: [] },
        expNumber: { visable: true, data1: [],data2: [] },
        expAmount: { visable: true, data1: [],data2: []}
    });

    useEffect(() => {
        const date = new Date();
        const weekDay = date.getDay();
        const days = [
            { amounts: [102, 60, 200, 700, -500], date: { day: 1, weekDay: 6, month: 6, year: 2024 } },
            { amounts: [102, 60, 2222, -20, 500], date: { day: 2, weekDay: 0, month: 6, year: 2024 } },
            { amounts: [102, 60, 123, 100, -3], date: { day: 3, weekDay: 1, month: 6, year: 2024 } },
            { amounts: [102, 60, 33, 700, -500], date: { day: 4, weekDay: 2, month: 6, year: 2024 } },
            { amounts: [102, 60, 200, 30, -500], date: { day: 5, weekDay: 3, month: 6, year: 2024 } },
            { amounts: [123, 20, 700, 700, -1], date: { day: 6, weekDay: 4, month: 6, year: 2024 } },
            { amounts: [102, 60, 200, 0, -500], date: { day: 7, weekDay: 5, month: 6, year: 2024 } },
            { amounts: [102, 60, 70, 700, 500], date: { day: 8, weekDay: 6, month: 6, year: 2024 } }
        ];

        const currentPioriod = [];
        const prevPioriod = [];

        if (pioriod === 'week' && transactions.length > 0) {
            for (let i = 0; i <= weekDay; i++) {
                const element = days[days.length - 1 - i];
                currentPioriod.push(element);
            }
            for (let i = 0; i <=7; i++) {
                const element = days[days.length - 2 - i - weekDay] !== undefined ? days[days.length - 2 - i - weekDay] : null;
                if (element) {
                    prevPioriod.push(element);
                }
            }
            currentPioriod.reverse();
            prevPioriod.reverse();
        }

        const transNumber = currentPioriod.map(el => el.amounts.length);
        const tranAmount = currentPioriod.map(el => el.amounts.reduce((p, c) => p + c, 0));
        const incomesNum = currentPioriod.map(el => el.amounts.filter(a => a > 0).length);
        const incomesAmount = currentPioriod.map(el => el.amounts.filter(a => a > 0).reduce((p, c) => p + c, 0));
        const expNumber = currentPioriod.map(el => el.amounts.filter(a => a < 0).length);
        const expAmount = currentPioriod.map(el => el.amounts.filter(a => a < 0).reduce((p, c) => p + c, 0));
        
        const prevTransNumber = prevPioriod.map(el => el.amounts.length);
        const prevTranAmount = prevPioriod.map(el => el.amounts.reduce((p, c) => p + c, 0));
        const prevIncomesNum = prevPioriod.map(el => el.amounts.filter(a => a > 0).length);
        const prevIncomesAmount = prevPioriod.map(el => el.amounts.filter(a => a > 0).reduce((p, c) => p + c, 0));
        const prevExpNumber = prevPioriod.map(el => el.amounts.filter(a => a < 0).length);
        const prevExpAmount = prevPioriod.map(el => el.amounts.filter(a => a < 0).reduce((p, c) => p + c, 0));

        setData({
            transNumber: { visable: true, data1: transNumber,data2: prevTransNumber },
            tranAmount: { visable: true, data1: tranAmount,data2: prevTranAmount },
            incomesNum: { visable: true, data1: incomesNum,data2: prevIncomesNum },
            incomesAmount: { visable: true, data1: incomesAmount,data2: prevIncomesAmount },
            expNumber: { visable: true, data1: expNumber,data2: prevExpNumber },
            expAmount: { visable: true, data1: expAmount,data2: prevExpAmount }
        });
    }, [pioriod, transactions]);

    const analisticsList = Object.entries(data);
    console.log();
    return (
        <div className="flex flex-col">
            {analisticsList.map(([key, element], index) => (
                element.visable && (
                    <div key={index} className={`rounded-md items-center justify-between mb-2 flex flex-col ${(index + 1) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} shadow-md h-32 bg-white`}>
                        <div className="md:w-[48%] rounded-md bg-emerald-700">
                            <h1>{element.data}</h1>
                        </div>
                        <div className="md:w-[48%] h-full w-72 rounded-md overflow-hidden border">
                            <Chart data1={element.data2} data2={element.data1} />
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}

export default AnaliticsPage;
