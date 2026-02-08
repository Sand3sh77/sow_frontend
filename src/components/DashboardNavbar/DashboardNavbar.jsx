import React, { useContext } from 'react';
import { LanguageSelect } from '../LanguageSelect';
import './dashboardNavbar.css';
import { AuthContext } from '../../context';

export default function DashboardNavbar() {
    const { user } = useContext(AuthContext);

    return (
        <nav id='dashboard-navbar-container'>
            <div id='dashboard-navbar-content'>
                <div id="dashboard-navbar-user">
                    <img
                        src={
                            user?.avatar ||
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCQmpeB3WGnGIASOiqh1CXN_EdnCiAgTQHw&s'
                        }
                        alt='User avatar'
                        id='dashboard-navbar-user-avatar'
                    />
                    <div id="dashboard-navbar-user-info">
                        <span>{user.name}</span>
                        <span>{user?.location || user?.email}</span>
                    </div>
                </div>
                <LanguageSelect />
            </div>
        </nav>
    )
}
