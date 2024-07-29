// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContext } from "./logic/GlobalProvider";
import { SideBar } from './comps';
// pages
import HomePage from './HomePage';
import CategoriesPage from './CategoriesPage';
import AnaliticsPage from './AnaliticsPage';
import SettingsPage from './SettingsPage';
import { useContext } from "react";
import Auth from "./Auth";


const App = () => {
  const { theme, user } = useContext(GlobalContext);

  return (
    <Router>
      <div className={`flex ${theme.text1st} ${theme.bgFill} min-h-[100vh] pb-16 justify-center`}>
          {true ? (
              <div className={`w-full p-2 md:pl-16 lg:w-3/4 `}>
            
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/analitics" element={<AnaliticsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
              <SideBar />
            
              </div>
          ) : <Auth />
          }
      </div>
    </Router>
  );
}

export default App;
