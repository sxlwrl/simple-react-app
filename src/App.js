import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './styles/App.css';
import './styles/styles_task1.css'
import './styles/styles_task2.css'
import GoodsGallery from "./components/task2/goodsGallery";
import Main from "./components/task1/Main";

function App() {
    return (
        <Router>
            <div>
                <div className="nav-bar">
                    <Link to="/task1" className="nav">Task 1</Link>
                    <Link to="/task2" className="nav">Task 2</Link>
                </div>


                <Routes>
                    <Route path="/task1" element={<Main />} />
                    <Route path="/task2" element={<GoodsGallery />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


