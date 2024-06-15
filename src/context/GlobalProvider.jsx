/* eslint-disable react/prop-types */
// src/context/GlobalProvider.js

import { useEffect, useState, createContext } from "react";
import { themes } from "../Assets/theme";
import { auth, signInWithGoogle, logOut, onAuthStateChanged, db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const saveToStorage = (key, value) => {
        const strValue = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, strValue);
    };

    const restoreFromStorage = (key) => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.log(error);
        }
    };

    const [transactions, setTransactions] = useState(() => restoreFromStorage('transactions') || []);
    const [dates, setDates] = useState(() => restoreFromStorage('dates') || []);
    const [categories, setCategories] = useState(() => restoreFromStorage('categories') || []);
    const [visible, setvisible] = useState(false);
    const [color, setColor] = useState('bg-green-600');
    const [data, setData] = useState({
        transNumber: restoreFromStorage('transNumber') || { visible: true, data1: [], data2: [] },
        tranAmount: restoreFromStorage('tranAmount') || { visible: true, data1: [], data2: [] },
        incomesNum: restoreFromStorage('incomesNum') || { visible: true, data1: [], data2: [] },
        incomesAmount: restoreFromStorage('incomesAmount') || { visible: true, data1: [], data2: [] },
        expNumber: restoreFromStorage('expNumber') || { visible: true, data1: [], data2: [] },
        expAmount: restoreFromStorage('expAmount') || { visible: true, data1: [], data2: [] }
    });
    const [theme, setTheme] = useState(themes[0]);
    const [user, setUser] = useState(null);

    const fetchData = async (userId) => {
        const q = query(collection(db, 'userData'), where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        const dataList = querySnapshot.docs.map(doc => doc.data());
        setData(dataList);
    };

    const addTran = async (newTran) => {
        if (user) {
            try {
                await addDoc(collection(db, 'transactions'), {
                    userId: user.uid,
                    ...newTran
                });
                setTransactions([...transactions, newTran]);
                const { day, month, year } = newTran.tranTime;
                let id = Math.floor(Math.random() * 10000);
                if (transactions.find(tran => tran.id === id)) Math.floor(Math.random() * 10000);
                if (!dates.find(el => el.year === year && el.month === month && el.day === day)) setDates([...dates, { day, month, year, id }]);
            } catch (error) {
                console.error('Error adding transaction: ', error);
            }
        }
    };

    const delTran = async (tran, dateTrans, date) => {
        if (user) {
            setTransactions(trans => trans.filter(t => t.id !== tran.id));
            delDate(dateTrans, date);
        }
    };

    const delDate = (dateTrans, date) => {
        const { day, month, year } = date;
        const findTran = dateTrans.length > 1;
        if (!findTran) {
            const filteredDates = dates.filter(d => d.day !== day || d.month !== month || d.year !== year);
            setDates(filteredDates);
        }
    };

    const newId = () => {
        let id = Math.floor(Math.random() * 10000);
        if (transactions.find(tran => tran.id === id)) id = Math.floor(Math.random() * 10000);
        return id;
    };

    const changeVisibility = (prop) => {
        const updatedData = { ...data, [prop]: { ...data[prop], visible: !data[prop].visible } };
        setData(updatedData);
        console.log(data);
    };

    const handleChoose = (theme) => {
        setTheme(theme);
    };

    useEffect(() => {
        saveToStorage('transactions', transactions);
        saveToStorage('dates', dates);
        saveToStorage('categories', categories);
        Object.entries(data).forEach(([key, value]) =>
            saveToStorage(key, value)
        );

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                fetchData(user.uid);
            } else {
                setUser(null);
                setData([]);
            }
        });
        return () => unsubscribe();

    }, [transactions, categories, data, user,dates]);

    return (
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
            user,
            signInWithGoogle,
            logOut,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
