import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className=' mx-auto dark:bg-black dark:text-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;