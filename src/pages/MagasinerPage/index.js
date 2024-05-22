import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import Header from '../../components/MagasinerComponents/Header/Header';
import Sidebar from '../../components/MagasinerComponents/Sidebar/Sidebar';
import Add from '../../pages/MagasinerPage/Add/Add';
import See from '../../pages/MagasinerPage/See/See';
import History from '../../pages/MagasinerPage/History/History';
import Body from '../../components/MagasinerComponents/ItemContent/ItemContent';

const MagasinerPage = () => {
    const getTitle = (pathname) => {
        switch (pathname) {
            case '/magasiner/addProducts':
                return 'Add Product';
            case '/magasiner/seeProducts':
                return 'See Products';
            case '/magasiner/history':
                return 'History';
            default:
                return 'Magasinier Page';
        }
    };

    const getContentComponent = (pathname) => {
        switch (pathname) {
            case '/magasiner/addProducts':
                return <Add />;
            case '/magasiner/seeProducts':
                return <See />;
            case '/magasiner/history':
                return <History />;
            default:
                return <div>
                            <Body/>
                     </div>;
        }
    };

    const location = useLocation();

    return (
        <div className='magasinerPage'>
            <div className='left'>
                <Sidebar />
            </div>
            <div className='right md-9'>
                <Header title={getTitle(location.pathname)} />
                {getContentComponent(location.pathname)}
            </div>
        </div>
    );
};

export default MagasinerPage;
