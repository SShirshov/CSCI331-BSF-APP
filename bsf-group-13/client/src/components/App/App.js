import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'
import {NavBar} from "../NavBar";
import {BrowserRouter, Route, Router, Routes, useNavigate} from "react-router-dom";
import Entries from "../Entries";
import ContactInfo from "../ContactInfo";

function App() {

  return (
      <div className={'App'}>
    <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path={'/entries'} element={<Entries />}></Route>
                <Route path={'/contactinfo'} element={<ContactInfo />}></Route>
            </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App;

