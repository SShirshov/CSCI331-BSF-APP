import AddEntry from "./AddEntry";
import CurrentEntries from "./CurrentEntries";
import Footer from "./Footer";
import logo from "./BSF.jpeg";
import "./Entries.css";


const Entries = () => {
    return (
        <>
            <img id= "img-logo" class="rounded mx-auto d-block" src={logo} alt="Logo"/>
            <h1 class= "text-center">Entries</h1>
            <AddEntry />
            <hr />
            <div className="entryMargin">
            <CurrentEntries />
            <hr />
            <Footer />
            </div>
        </>
    )
}

export default Entries;