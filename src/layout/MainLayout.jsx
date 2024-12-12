import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/common/Navbar';
import Footer from '../pages/common/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <header>
                <Navbar></Navbar>
            </header>
            
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;