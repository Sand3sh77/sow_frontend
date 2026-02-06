import React from 'react'
import { Footer } from '../../components';
import { Outlet } from 'react-router';
import "./dashboardLayout.css";

export default function DashboardLayout() {
    return (
        <div id='dashboard-layout-container'>
            <Outlet />
            <Footer />
        </div>
    );
};
