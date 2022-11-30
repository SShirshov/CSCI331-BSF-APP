import {NavBar} from "./NavBar";
import AddEntry from "./AddEntry";
import CurrentEntries from "./CurrentEntries";
import Footer from "./Footer";


const Entries = () => {
    return (
        <>
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