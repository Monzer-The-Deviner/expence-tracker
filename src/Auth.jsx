import { useContext, useState } from "react";
import { GlobalContext } from "./logic/GlobalProvider";
import facebookIcon from "./Assets/facebook-f.svg"
import googleIcon from "./Assets/google.svg"
import bgAsset from "./Assets/cash-svgrepo-com.svg"
import bgAsset2 from "./Assets/1money-svgrepo-com.svg"
import { Link } from "react-router-dom";
const AuthPage = () => {
    const {signInWithFacebook, signInWithGoogle, setUser} =useContext(GlobalContext)
    const [signIn,setSignIn] = useState(false)
    return ( 
        <div className ="overflow-hidden bg-slate-900 flex justify-center items-center w-full h-[100vh]">
            {/* <img src={bgAsset1} className="fixed -bottom-10 -left-20 "/> */}
            <img src={bgAsset} className="fixed top-10 w-40 -right-10 "/>
            <img src={bgAsset2} className="fixed top-60 w-40 -left-10 "/>
            
            <form className="flex p-4  text-white flex-col bg-[#605c7763] backdrop-blur-md rounded-lg w-80 z-10 gap-2">
            {signIn?(
                <>
                <div className="flex items-start justify-between">
                    <h1 className="mb-4 text-xl">Welcome Back!!</h1>
                    <Link>back</Link>
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="password">Password</label>
                <input id="password"  type="password" />
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
                    <span>new here?</span><button className="text-teal-400 py-2 px-4" onClick={ ()=>setSignIn(false)}>signUp</button>
                </div>
            </>
            )
            
            :
            
            <>
                <div className="flex items-start justify-between">
                    <h1 className="mb-4 text-xl">Welcome To The Fam!!</h1>
                    <Link to={'/'}>back</Link>
                </div>
                
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
                <div className="flex justify-center">
                <span>alrady have an account?</span><button className="text-teal-400 px-4" onClick={ ()=>setSignIn(true)}>signIn</button>
                </div>
                <span className="text-teal-400 self-center" onClick={()=>setUser({username:'guest',email:'hahajoke@email.com'})}>just trying</span>
            </>
            }

            </form>
            
        </div>
     );
}
 
export default AuthPage;