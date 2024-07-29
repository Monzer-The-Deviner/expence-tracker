import { useContext, useState } from "react";
import { GlobalContext } from "./logic/GlobalProvider";
import facebookIcon from "./Assets/facebook-f.svg"
import googleIcon from "./Assets/google.svg"
import bgAsset1 from './Assets/Asset-1.png'

const Auth = () => {
    const {signInWithFacebook,signInWithGoogle} =useContext(GlobalContext)
    const [signIn,setSignIn] = useState(false)
    return ( 
        <div className ="overflow-hidden container-bg flex justify-center items-center w-full h-[100vh]">
            <img src={bgAsset1} className="fixed -bottom-32  md:-bottom-5 -left-40 md:-left-20  w-96"/>
            
            <form className="flex p-4 flex-col bg-[#f2f1f7b7] backdrop-blur-md rounded-lg w-80 z-10 gap-2">
            {signIn?(
                <>
                <h1 className="mb-4 text-lg">Welcome Back!!</h1>
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
                                <div className="flex justify-around p-2 items-center">

                    <button onClick={signInWithGoogle}
                    className="flex flex-col justify-center items-center w-fit">
                        <img src={googleIcon} className="w-6 aspect-square" />
                        Google
                    </button>
                    <button onClick={signInWithFacebook}
                    className="flex flex-col justify-center items-center w-fit">
                        <img src={facebookIcon} className="w-5 aspect-square"/>
                        facebook
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <span>new here?</span><button className="text-green-600 py-2 px-4" onClick={ ()=>setSignIn(false)}>signUp</button>
                </div>
            </>
            )
            
            :
            
            <>
                <h1 className="mb-4 text-lg">Welcome to the Fam!!</h1>
                
                <label htmlFor="userName">user name</label>
                <input id="userName" type="text" maxLength={30}/>
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
                <div className="flex justify-around p-2 items-center">

                    <button onClick={signInWithGoogle}
                    className="flex flex-col justify-center items-center w-fit">
                        <img src={googleIcon} className="w-6 aspect-square" />
                        Google
                    </button>
                    <button onClick={signInWithFacebook}
                    className="flex flex-col justify-center items-center w-fit">
                        <img src={facebookIcon} className="w-5 aspect-square"/>
                        facebook
                    </button>
                </div>
                <div className="flex justify-center items-center">
                <span>alrady have an account?</span><button className="text-green-600 py-2 px-4" onClick={ ()=>setSignIn(true)}>signIn</button>
                </div>
            </>
            }

            </form>
            
            

        </div>
     );
}
 
export default Auth;