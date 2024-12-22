import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <hr />
            <div className="flex-grow mt-10">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;