import React from 'react'
import { Footer, Navbar } from '../../components';
import { Outlet } from 'react-router';
import "./homeLayout.css";

export default function HomeLayout() {
    return (
        <div id='home-layout-container'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
