import React from 'react'
import { Footer, Navbar } from '../../components';
import { Outlet } from 'react-router';

export default function HomeLayout() {
    return (
        <div style={{
            minHeight: "100vh",
            backgroundImage: "url(https://storage.123fakturera.se/public/wallpapers/sverige43.jpg)",
            backgroundSize: "cover",
            overflowX: "hidden",
        }}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
