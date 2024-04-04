import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import MainSwiper from './components/MainSwiper';
import ItemList from './components/ItemList';
import InstagramList from './components/InstagramList';
import CustomizeEvent from './components/CustomizeEvent';

const Main = () => {
    return (
        <>
            <Header />
            <MainSwiper />
            <ItemList />
            <CustomizeEvent />
            <InstagramList />
            <Footer />
        </>
    );
};

export default Main;
