// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContext } from "./context/GlobalProvider";
import { SideBar } from './comps';
// pages
import HomePage from './HomePage';
import CategoriesPage from './CategoriesPage';
import AnaliticsPage from './AnaliticsPage';
import SettingsPage from './SettingsPage';
import { useContext } from "react";

const App = () => {
  const { theme, user, signInWithGoogle } = useContext(GlobalContext);

  return (
    <Router>
      <div className={`flex ${theme.text1st} ${theme.bgFill} min-h-[100vh] pb-16 justify-center`}>
        <div className="w-full p-2 md:w-3/4">
          {user ? (
            <>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/analitics" element={<AnaliticsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
              <SideBar />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[100vh]">
              <h1 className="mb-4">Please Sign In</h1>
              <button onClick={signInWithGoogle} className="btn btn-primary">Sign In with Google</button>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
