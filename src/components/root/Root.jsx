import { Outlet } from "react-router-dom";
import Header from "../shared-file/Header";
import Footer from "../shared-file/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;