import {NavBar} from "./NavBar";
import AddEntry from "./AddEntry";
import CurrentEntries from "./CurrentEntries";
import Footer from "./Footer";
import logo from "./BSF.jpeg";


const Entries = () => {
    return (
        <>
            <img className="img-logo" src={logo} alt="Logo"/>
            <h1>Entries</h1>
            <AddEntry />
            <hr />
            <CurrentEntries />
            <hr />
            <Footer />
        </>
    )
}

export default Entries;