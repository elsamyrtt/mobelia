import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Catalogue from "@/components/Catalogue";

export default function catalogue() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Search />
                <Catalogue />
            </main>
            <Footer />
        </>);
} 