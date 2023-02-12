import React from 'react';
import './App.css';
import Main from "./main/Main";
import {InfoBlocks} from "./infoBlocks/InfoBlocks";
import {AboutUs} from "./aboutUs/AboutUs";
import {Location} from "./location/Location";
import Contacts from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Main/>
            <InfoBlocks />
            <AboutUs />
            <Location />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
