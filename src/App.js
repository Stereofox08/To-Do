import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import Drug from "./Drug/Drug";
import Header from "./Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
        <>
            <Header/>
            <Drug/>
            <Routes>
                <Route path="/Drug/g"></Route>
            </Routes>
        </>
        </BrowserRouter>
    );
}

export default App;
