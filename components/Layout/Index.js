import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout =({children})=>{
    return(
        <div>
            <Header/>
            <div className="container mx-auto">
            {children}

            </div>
            <Footer/>
        </div>

    )
}
export default Layout