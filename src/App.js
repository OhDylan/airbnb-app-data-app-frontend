import React from "react";
import { Route, Routes, HashRouter } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import "./App.css";

const App = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/searchproperty" exact element={<SearchPage/>} />
                    <Route path="/" exact element={<LandingPage />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;