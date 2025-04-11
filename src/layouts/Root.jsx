import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* navbar */}
            <Navbar></Navbar>
            {/* outlet */}  
            <Outlet />
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;