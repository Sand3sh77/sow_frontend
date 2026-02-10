import { Outlet } from 'react-router';
import { DashboardNavbar, Sidebar } from '../../components';
import './dashboardLayout.css';

export default function DashboardLayout() {
    return (
        <div id='dashboard-layout-container'>
            <DashboardNavbar />
            <div id='dashboard-layout'>
                <div id='dashboard-sidebar'>
                    <Sidebar />
                </div>
                <div id="dashboard-layout-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
