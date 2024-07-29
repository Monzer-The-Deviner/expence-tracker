import profileImage from '../Assets/078010b6833975f5883eae3c4e07ae1f.jpg'
import homeIcon from '../Assets/house.svg'
import reportsIcon from '../Assets/chart-column.svg'
import sittingsIcon from '../Assets/gear.svg'
import categoriesIcon from '../Assets/chart-pie.svg'
import logo from '../Assets/chart-simple.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../logic/GlobalProvider'

const SideBar = () => {
    const{theme} = useContext(GlobalContext)
    return ( 
        <div className={`w-full md:w-auto md:h-full flex rounded-t-xl md:rounded-none md:rounded-r-2xl p-4 shadow-xl ${theme.bg3rd} justify-between flex-row md:flex-col fixed bottom-0 left-0 self-start `}>

            <img src={logo} alt="profile pictue" className={`rounded-full w-6 ${theme.SideBarElsColor}`}  />

            <div className='flex space-x-4 md:space-x-0 md:space-y-8 md:flex-col flex-row'>
                <Link to='/' ><img src={homeIcon} alt="home Icon" className={`w-6 ${theme.SideBarElsColor}`} /></Link>
                <Link to={'/categories'}><img src={categoriesIcon} alt="categories Icon" className={`w-6 ${theme.SideBarElsColor}`} /></Link>
                <Link to='/analitics'> <img src={reportsIcon} alt="reports Icon" className={`w-6 ${theme.SideBarElsColor}`} /></Link>
                <Link to={'/settings'}><img src={sittingsIcon} alt="sittings Icon" className={`w-6 ${theme.SideBarElsColor}`} /></Link>
            </div>

            <img src={profileImage} alt="profile pictue" className="rounded-full w-6 " />

        </div>
     );
}
 
export default SideBar;