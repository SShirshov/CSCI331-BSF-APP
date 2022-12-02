import React from 'react';
import './App.css';
import {NavBar} from "../NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Entries from "../Entries";
import ContactInfo from "../ContactInfo";
import Messages from "./Messages";

function App() {

  return (
      <div className={'App'}>
    <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path={'/entries'} element={<Entries />}></Route>
                <Route path={'/contactinfo'} element={<ContactInfo />}></Route>
                <Route path={'/messages'} element={<Messages />}></Route>
            </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App;

