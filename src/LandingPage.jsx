import { Link } from "react-router-dom"
import logo from './Assets/chart-column.svg'
import facebook from './Assets/facebook-f.svg'
import google from './Assets/google.svg'
import decoration from './Assets/money-manager-svgrepo-com.svg'
import decoration2 from './Assets/bills-and-coins-svgrepo-com.svg'
import decoration3 from './Assets/1money-svgrepo-com.svg'
import decoration4 from './Assets/bills-svgrepo-com.svg'
const LandingPage = () => {
  return (
    <div className="h-[80vh] text-teal-950 bg-gradient-to-r from-slate-800 bg-[length:300%] relative  to-slate-800 via-emerald-900 animate-gradientAnimation flex justify-center items-center w-full rounded-b-3xl flex-col gap-8">
      <header className=" w-full fixed top-0  flex justify-between py-4 gap-4  max-w-5xl px-2">
        <img src={logo} className="h-5 invert" alt="" />
        <ul className="flex gap-4 ">
        
          <li><a href="https://www.facebook.com"><img src={facebook} className="h-5" alt="" /></a></li>
          <li><a href="https://www.google.com"><img src={google} className="h-5" alt="" /></a></li>
        </ul>
      </header>
        <img src={decoration} className="w-32 absolute bottom-10 left-10 animate-float" style={{animationDelay:'0.2s'}} alt="" />
        <img src={decoration4} className="w-32 absolute bottom-10 right-10 animate-float" style={{animationDelay:'0.4s'}} alt="" />
        <img src={decoration3} className="w-20 absolute left-2 top-20 animate-float" style={{animationDelay:'0.6s'}} alt="" />
        <img src={decoration2} className="w-20 absolute right-32 top-32 animate-float" style={{animationDelay:'0.9s'}} alt="" />

        <div className=" z-10 text-white font-bold text-center">
            <h1 className="text-5xl">Manage your finance <br/>with no headeach</h1>
            <br />
            <p>Traka is the easiest most effective way to manage all your finanace
              <br />
              in one place
            </p>
        </div>
            <Link to={'/auth'} className="btn z-10 bg-white text-2xl rounded-lg py-2 px-4 self-center">Try Now</Link>
    </div>
  )
}

export default LandingPage