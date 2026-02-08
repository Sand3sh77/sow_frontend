import React from 'react'
import { Outlet } from 'react-router';
import { DashboardNavbar, Sidebar } from '../../components';
import './dashboardLayout.css';

export default function DashboardLayout() {
    return (
        <div id='dashboard-layout-container'>
            <DashboardNavbar />
            <div id='dashboard-layout'>
                <Sidebar />
                <div id="dashboard-layout-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
