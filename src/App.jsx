import { BrowserRouter as Router, Routes,Route } from "react-router-dom"; 
import {GlobalContext, GlobalProvider} from "./context/GlobalProvider";
import {SideBar} from './comps'
//pages
import HomePage from './HomePage'
import CategoriesPage from './CategoriesPage'
import AnaliticsPage from './AnaliticsPage'
import SettingsPage from './SettingsPage'
import { useContext } from "react";
const App = () => {
  const {theme}=useContext(GlobalContext)
  console.log(theme);
  return(
   
    <Router>
    <div className={ `flex ${theme.text1st} ${theme.bgFill} min-h-[100vh] pb-16 justify-center`}>
      <div className="w-full p-2 md:w-3/4">
        <Routes>
            <Route path="/" element ={<HomePage /> } />
            <Route path="/categories" element ={<CategoriesPage /> } />
            <Route path="/analitics" element ={<AnaliticsPage /> } />
            <Route path="/settings" element ={<SettingsPage /> } />
        </Routes>
      </div>
      <SideBar />

    </div>
    </Router>
    
  );
}
 
export default App;