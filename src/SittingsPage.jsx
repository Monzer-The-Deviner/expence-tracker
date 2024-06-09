
import profilePictue from './Assets/078010b6833975f5883eae3c4e07ae1f.jpg'

const SittingsPage = () => {
    const accounts = [
        {username:'john doe',email:'haha@example.com',pictue:profilePictue},
        {username:'james doe',email:'looool@example.com',pictue:profilePictue},
    ]
    const Themes = [
        {
            bg1st : 'bg-[#ff0000]',
            bg2nd : 'bg-[#fff]',
            text1st : 'text-white',
            text2nd : 'text-green-600',
        },
        {
            bg1st : 'bg-[#38A56F]',
            bg2nd : 'bg-[#EEF6F640]  backdrop-blur-lg',
            text1st : 'text-[#2C5056]',
            text2nd : 'text-[#707070]',
        },
        {
            bg1st : 'bg-[#ff0000]',
            bg2nd : 'bg-[#fff]',
            text1st : 'text-white',
            text2nd : 'text-green-600',
        },
        {
            bg1st : 'bg-[#ff0000]',
            bg2nd : 'bg-[#fff]',
            text1st : 'text-white',
            text2nd : 'text-green-600',
        },
        {
            bg1st : 'bg-[#ff0000]',
            bg2nd : 'bg-[#fff]',
            text1st : 'text-white',
            text2nd : 'text-green-600',
        },
    ]
    return ( 
        <>
            <section className="gap-2 flex flex-col mt-16 md:w-1/2 ">
            <h3>Accounts: </h3>
            {accounts.map((account,index)=>
                <div className='flex bg-white shadow-md rounded-sm ' key={index}>
                    <div><img src={account.pictue} className='rounded-full w-8 aspect-square m-1 ' /></div>
                    <div className='flex flex-col'>
                        <h2>{account.username}</h2>
                        <span>{account.email}</span>
                    </div>
                </div>
            )}
            </section>

            <section>
                <h3>Themes</h3>
                <div className="flex flex-wrap gap-4 ">
                    {Themes.map((theme,index)=>
                        <div key={index} className='bg-white flex shadow-md rounded-lg flex-col h-36 w-32'>
                            <div className={`${theme.bg1st} flex flex-col shadow-md rounded-lg h-3/4`}>
                                    <span className={`${theme.text1st}`}>some text</span>
                                    <div className={`m-2 mb-1 rounded-lg h-8  ${theme.bg2nd}`} >
                                        <span className={`${theme.text2nd}`}>some text</span>
                                    </div>
                            </div>
                        </div>
                    
                    )}
                </div>
            </section>
            <section>
                <h3>Analitics Details</h3>

            </section>
            <section>
                <h3>Are you happy with Traka?</h3>
                <p> give us a feedback to improve our product so it can 
                suit your needs :</p>
            </section>
        </>
     );
}
 
export default SittingsPage;