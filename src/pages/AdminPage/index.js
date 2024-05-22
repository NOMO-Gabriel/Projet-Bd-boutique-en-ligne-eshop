import React from 'react';
import { useLocation } from 'react-router-dom'; // Importer useLocation depuis react-router-dom
import './styles.css';
import Header from '../../components/adminComponents/AdminHeader/AdminHeader';
import Sidebar from '../../components/adminComponents/Sidebar/Sidebar';
import SalesPage from '../AdminPage/SalesPage/SalesPage';
import SettingsPage from '../AdminPage/Settings/Settings';
import MagasinierPage from '../AdminPage/Magasinier/Magasinier';
import DashBoard from '../../components/adminComponents/DashboardItemContent/DashboardItemContent';

const AdminPage = () => {
    const getTitle = (pathname) => {
        switch (pathname) {
            case '/admin/sales':
                return 'Sales and Revenues';
            case '/admin/settings':
                return 'Settings';
            case '/admin/magasiniers':
                return 'Magasiners Informations';
            default:
                return 'Admin Dashboard';
        }
    };

    const getContentComponent = (pathname) => {
        switch (pathname) {
            case '/admin/sales':
                return <SalesPage />;
            case '/admin/settings':
                return <SettingsPage />;
            case '/admin/magasiniers':
                return <MagasinierPage />;
            default:
                return  <div>
                                <DashBoard/>
                        </div>;
        }
    };

    const location = useLocation();

    return (
        <div className='adminPage'>
            <div className='left'>
                <Sidebar />
            </div>
            <div className='right'>
                <Header title={getTitle(location.pathname)} />
                {getContentComponent(location.pathname)}
            </div>
        </div>
    );
};

export default AdminPage;
