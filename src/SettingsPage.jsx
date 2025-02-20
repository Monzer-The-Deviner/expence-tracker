import { useContext } from 'react';
import profilePicture from './Assets/078010b6833975f5883eae3c4e07ae1f.jpg';
import { GlobalContext } from './context/GlobalProvider';
import { themes } from './Assets/theme';

const SettingsPage = () => {
    const accounts = [
        { username: 'John Doe', email: 'haha@example.com', picture: profilePicture },
        { username: 'James Doe', email: 'looool@example.com', picture: profilePicture },
    ];


    const { data, changeVisibility,handleChoose,theme } = useContext(GlobalContext);
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
                {accounts.map((account, index) => (
                    <div className={`flex ${theme.bgFill2} shadow-md rounded-sm`} key={index}>
                        <div>
                            <img src={account.picture} className='rounded-full w-8 aspect-square m-1' alt='Profile' />
                        </div>
                        <div className='flex flex-col'>
                            <h2>{account.username}</h2>
                            <span>{account.email}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section>
                <h3>Themes</h3>
                <div className="flex flex-wrap max-h-[35vh] overflow-hidden hover:overflow-y-scroll gap-4">
                    {themes.map((theme, index) => (
                        <div
                        onClick={()=>handleChoose(theme)}
                        key={index} className={`${theme.bgFill2} flex shadow-md rounded-lg flex-col h-36 w-32`}>
                            <div className={`${theme.bg1st} flex flex-col shadow-md rounded-lg h-3/4`}>
                                <span className={`${theme.text2nd}`}>some text</span>
                                <div className={`m-2 mb-1 rounded-lg h-8 ${theme.bg2nd}`}>
                                    <span className={`${theme.text1st}`}>some text</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex flex-col'>
                <h3>Backup and restore data</h3>

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
