import { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalProvider";
const Auth = () => {
    const {signInWithFacebook,signInWithGoogle} =useContext(GlobalContext)
    const [signIn,setSignIn] = useState(false)
    return ( 
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            {signIn?
            <div className="flex p-4 flex-col gap-2">
                <h1 className="mb-4">Welcome Back!!</h1>
                <input type="email" />
                <input type="password" />
                <button onClick={signInWithGoogle}
                 className="flex flex-col">
                    <img src="./Assets/google.svg" alt="" />
                    Google
                </button>
                <button onClick={signInWithFacebook}
                 className="flex flex-col">
                     <img src="./Assets/facebook-f.svg" alt="" />
                    facebook
                </button>
                <span>are you new here?</span><button className="text-green-800 border-green-800 py-2 px-4" onClick={setSignIn(false)}>signUp</button>
            </div>
            :
            
            <div className="flex p-4 flex-col gap-2">
                <h1 className="mb-4">Welcome Back!!</h1>
                <input type="text" maxLength={30}/>
                <input type="email" />
                <input type="password" />
                <button onClick={signInWithGoogle}
                 className="flex flex-col">
                    <img src="./Assets/google.svg" alt="" />
                    Google
                </button>
                <button onClick={signInWithFacebook}
                 className="flex flex-col">
                     <img src="./Assets/facebook-f.svg" alt="" />
                    facebook
                </button>
                <span>alrady have an account?</span><button className="text-green-800 border-green-800 py-2 px-4" onClick={setSignIn(true)}>signIn</button>
            </div>
            }

        </div>
     );
}
 
export default Auth;