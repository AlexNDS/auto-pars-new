import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./main/Main";
import {InfoBlocks} from "./infoBlocks/InfoBlocks";
import {AboutUs} from "./aboutUs/AboutUs";

function App() {
    return (
        <div className="App">
            <Main/>
            <InfoBlocks />
            <AboutUs />
        </div>
    );
}

export default App;
