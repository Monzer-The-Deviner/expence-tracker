import { BrowserRouter as Router, Routes,Route } from "react-router-dom"; 
import {GlobalProvider} from "./cotext/GlobalProvider";
import {SideBar} from './comps'

import HomePage from './HomePage'
import CategoriesPage from './CategoriesPage'
import AnaliticsPage from './AnaliticsPage'
import SittingsPage from './SittingsPage'
const App = () => {
  return(
    <GlobalProvider>
    <Router>
    <div className=" flex  bg-slate-100 min-h-[100vh] pb-36 justify-center">
      <div className="w-full p-2 md:w-3/4">
        <Routes>
            <Route path="/" element ={<HomePage /> } />
            <Route path="/categories" element ={<CategoriesPage /> } />
            <Route path="/analitics" element ={<AnaliticsPage /> } />
            <Route path="/sittings" element ={<SittingsPage /> } />
        </Routes>
      </div>
      <SideBar />

    </div>
    </Router>
    </GlobalProvider>
  );
}
 
export default App;