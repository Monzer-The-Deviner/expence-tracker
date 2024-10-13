import { useContext } from 'react';
import { GlobalContext } from './logic/GlobalProvider';
import { themes } from './Assets/theme';
// import { fetchData ,uploadData} from './fireBase';

const SettingsPage = () => {

    const {data, changeVisibility,handleChoose,theme,user} = useContext(GlobalContext);
    const analyticsList = Object.keys(data);

    const clearData = ()=>{
        analyticsList.map(prop=>
            localStorage.clear(prop)
            )
    }
    const handleSubmit = e=>{
        e.preventDefault()
        console.log(document.querySelector('#feedbackInput').value)
    }


    return (
        <div className='w-full flex gap-8 flex-col'>
            <section className="gap-2 flex flex-col mt-16 md:w-1/2">
                <h3>Accounts:</h3>
                {user&&  <div className={`flex ${theme.bgFill2} shadow-md rounded-sm`}>
                            <div>
                                <img src={user.picture} className='rounded-full w-8 aspect-square m-1' alt='Profile' />
                            </div>
                            <div className='flex flex-col'>
                                <h2>{user.username}</h2>
                                <span>{user.email}</span>
                            </div>
                        </div>}
                
            </section>

            <section>
                <h3>Themes</h3>
                <div className="flex flex-wrap max-h-[35vh] justify-center overflow-hidden hover:overflow-y-scroll gap-4">
                    {themes.map((theme, index) => (
                        <div
                        onClick={()=>handleChoose(theme)}
                        key={index} className={`${theme.bgFill2} border border-gray-300 flex shadow-md rounded-lg flex-col h-36 w-32`}>
                            <div className={`${theme.bg1st} flex flex-col shadow-md p-2 gap-4 rounded-lg h-3/4`}>
                                <div className={` rounded-lg h-8 ${theme.bg2nd}`}>
                                </div>
                                <span className={`${theme.text2nd} text-lg`}>Some Text</span>
                            </div>
                                    <span className={`${theme.text1st} m-2`}>Some text</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex gap-3 flex-col'>
                {/* <h3>Backup and restore data</h3>

                <div className='flex gap-2 w-full'>
                    <button 
                    onClick={()=>fetchData('transactions',setTransactions,setOfflineData)}
                    className= {`border-green-500 border-2 flex-1 flex justify-center ${theme.bg1Fill2} rounded-md px-4 py-2`} >restore transactions</button>
                    <button 
                    onClick={()=>{
                        offlineData.map(item=>uploadData(item.coll,item.data,setOfflineData,offlineData)) 
                        // uploadData('data',data)
                    }}
                    className= {`border-green-500 border-2 flex-1 justify-center flex ${theme.bg1Fill2} rounded-md px-4 py-2`}  >Backup data</button>
                </div> */}

                    <button 
                    onClick={clearData}
                    className={`flex justify-center items-center py-2 px-1 rounded-md ${theme.buttonBg2} ${theme.buttonText1}`}>restore default settings</button>
            </section>
            <div className='w-full flex gap-8 flex-col  md:flex-row justify-between'>
                <section className='flex flex-col gap-8 md:max-w-[40%]'>
                    <h3>Analytics Details</h3>
                    <div className='flex flex-wrap gap-4'>
                        {analyticsList.map((prop, index) => (
                            <div key={index}>
                                <input
                                    checked={data[prop].visible}
                                    type="checkbox"
                                    onChange={() => changeVisibility(prop)}
                                /> 
                                <span>{prop}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <form   name='feedback' className='flex gap-4 flex-col'>
                    <h3>Are you happy with Traka?</h3>
                    <p>Give us feedback to improve our product so it can suit your needs:</p>
                    <textarea id='feedbackInput' className={`w-full shadow-md ${theme.bgFill2} border border-gray-500 rounded-md`} cols="30" rows="10"></textarea>
                    <button onClick={handleSubmit} type='submit' className={`${theme.buttonBg1}  ${theme.buttonText1} flex items-center justify-center px-4 rounded-md  py-2`}>
                        Send Feedback
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SettingsPage;
