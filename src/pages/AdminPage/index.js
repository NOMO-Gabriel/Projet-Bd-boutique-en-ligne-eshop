import React from 'react';
import './styles.css'

import Header from '../../adminComponents/Header/Header'
import Sidebar from '../../adminComponents/Sidebar/Sidebar'
import DashboardItemContent from '../../adminComponents/DashboardItemContent/DashboardItemContent'

const AdminPage = () => {
    return (
        <div className='adminPage'>
            <div className='left'>
                <Sidebar />
            </div>
            <div className='right'>
                <Header />
                <DashboardItemContent />
            </div>
        </div>
    );
};

export default AdminPage;