import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './features/Main/Main';
import Registration from './features/Register/Registration';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/register" element={<Registration />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
