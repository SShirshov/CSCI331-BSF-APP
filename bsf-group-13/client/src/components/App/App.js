import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'
import {NavBar} from "../NavBar";

function App() {

  return (
    <div className="App">
        <NavBar />
        <h1>Entries</h1>
        <AddEntry />
        <hr />
        <CurrentEntries />
        <hr />
      <Footer />
    </div>
  )
}

export default App;

