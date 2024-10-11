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
import AuthPage from "./Auth";
import LandingPage from "./LandingPage";



const App = () => {
  const { theme, user } = useContext(GlobalContext);

  return (
    <Router>
      <div className={`flex ${theme.text1st} ${theme.bgFill} min-h-[100vh] justify-center`}>
          {user ? (
          <div className="max-w-5xl p-2 lg:pl-16 w-full">
              <Routes>

                  <Route path="/" element={<HomePage />} />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/analitics" element={<AnaliticsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
              
                
              </Routes>
          </div>
          ) : <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthPage />} />
          
              
              </Routes>
        }
        {user&&<SideBar />}
      </div>
    </Router>
  );
}

export default App;
