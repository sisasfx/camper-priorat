import React from "react";
import Navbar from "../components/navbar.jsx"
import Footer  from "../components/footer.jsx"

const RootLayout = () => {
    return(
        <div className="root-layout"> 
            <Navbar/>

            <Footer/>
        </div>
    );
}

export default RootLayout;