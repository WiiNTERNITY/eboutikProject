import React from 'react';
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footers/Footer";
import "./styles/Layout.scss";

const Layout = ({children}) => {
    return (
        <div className='Layout'>
            <div className='Layout-container'>
                <Header/>
                <div className='Layout-content'>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;
